package controllers

import (
	"os"
	"time"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	filter := bson.M{"email": data["email"]}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), filter)

	if resultOne == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "User not found",
		})
	}
	password := resultOne[0]["password"].(primitive.Binary).Data

	if err := bcrypt.CompareHashAndPassword(password, []byte(data["password"])); err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Incorrect password",
		})
	}

	email := resultOne[0]["email"].(string)

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    email,
		ExpiresAt: &jwt.Time{Time: time.Now().Add(time.Hour * 24)},
	})

	token, err := claims.SignedString([]byte(os.Getenv("SECRET_KEY")))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "Could not login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}
