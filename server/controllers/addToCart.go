package controllers

import (
	"fmt"
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*
	{
		"id":"some id here"
	}

	for testing:

	{
		"id":"some id here",
		"email":"some email here",
	}
*/

func AddToCart(c *fiber.Ctx) error {
	var request map[string]string

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	/*
		//with jwt
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

		filter := bson.M{"email": claims.Issuer}*/

	var user models.User

	filter := bson.M{"email": request["email"]}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), filter)

	if resultOne == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if resultOne[0]["cart"] != nil {
		fmt.Println("Before change", resultOne[0]["cart"].(primitive.A))
	}

	objID, _ := primitive.ObjectIDFromHex(request["id"])
	filter = bson.M{"_id": objID}

	resultTwo := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"), filter)

	if resultTwo == nil {
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
