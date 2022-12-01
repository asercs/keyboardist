package controllers

import (
	"fmt"
	"os"
	"strconv"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*
	{
		"order":"some id here"
	}
*/

func AddToCart(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	fmt.Println("Кукис: ", cookie)

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	})

	fmt.Println("Токен: ", token)

	if err != nil {
		fmt.Println(err, "message unauthenticated")
		return c.Status(401).JSON(fiber.Map{
			"message": "Unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User

	filter := bson.M{"email": claims.Issuer}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), filter)

	if resultOne == nil {
		fmt.Println("User not found vnature")
		return c.Status(401).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if resultOne[0]["cart"] != nil {
		fmt.Println("Before change", resultOne[0]["cart"].(primitive.A))
	}

	fmt.Println("user found")

	Order := c.Params("order")
	number, err := strconv.Atoi(Order)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Invalid order",
		})
	}

	fmt.Println("request parsed congratz")

	filter = bson.M{"order": number}

	resultTwo := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"), filter)

	if resultTwo == nil {
		fmt.Println("Keyboard not found vnature")
		return c.Status(401).JSON(fiber.Map{
			"message": "Keyboard not found",
		})
	}

	//user.Cart = append(user.Cart, resultTwo[0]["_id"].(primitive.ObjectID))
	user.Cart = append(user.Cart, resultTwo[0]["_id"])
	if resultOne[0]["cart"] != nil {
		user.Cart = append(user.Cart, resultOne[0]["cart"].(primitive.A)...)
	}
	user.Email = resultOne[0]["email"].(string)

	fmt.Println("data that is send to database method", user.Cart, "\n", user.Email)

	database.UpdateOneUserFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), user)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}
