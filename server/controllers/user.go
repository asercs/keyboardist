package controllers

import (
	"fmt"
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func User(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	})

	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User

	filter := bson.M{"email": claims.Issuer}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), filter)

	if resultOne == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	user.ID = resultOne[0]["_id"].(primitive.ObjectID)
	user.Email = resultOne[0]["email"].(string)
	user.Password = resultOne[0]["password"].(primitive.Binary).Data

	fmt.Println(user.Email)
	fmt.Println(user.Password)
	return c.JSON(user)
}
