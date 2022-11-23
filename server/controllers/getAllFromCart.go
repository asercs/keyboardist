package controllers

import (
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*
	for testing:

	{
		"email":"some email here"
	}
*/
func GetAllFromCart(c *fiber.Ctx) error {
	/*
		//jwt version
		cookie := c.Cookies("jwt")

		token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SECRET_KEY")), nil
		})

		if err != nil {
			return c.Status(401).JSON(fiber.Map{
				"message": "Unauthenticated",
			})
		}

		claims := token.Claims.(*jwt.StandardClaims)*/

	var request map[string]string

	if err := c.BodyParser(&request); err != nil {
		return err
	}

	filter := bson.M{"email": request["email"]}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), filter)

	if resultOne == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if resultOne[0]["cart"] == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Cart is empty",
		})
	}

	cart := resultOne[0]["cart"].(primitive.A)

	var keyboards []models.Keyboard
	var results []primitive.M

	for _, v := range cart {
		filter = bson.M{"_id": v}
		results = database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"), filter)
		keyboards = append(keyboards, models.Keyboard{
			ID:          results[0]["_id"].(primitive.ObjectID),
			Name:        results[0]["name"].(string),
			Price:       results[0]["price"].(float64),
			Description: results[0]["description"].(string),
			Images:      results[0]["images"].(primitive.A),
			Brand:       results[0]["brand"].(string),
			Quantity:    results[0]["quantity"].(int32),
			ProductType: results[0]["product_type"].(string),
		})
	}

	return c.JSON(keyboards)
}
