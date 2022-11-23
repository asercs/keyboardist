package controllers

import (
	"os"
	"strconv"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetKeyboard(c *fiber.Ctx) error {
	//parse parameters of request
	Order := c.Params("order")
	number, err := strconv.Atoi(Order)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Invalid order",
		})
	}

	filter := bson.M{"order": number}

	resultOne := database.FindOneFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"), filter)

	if resultOne == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Keyboard not found",
		})
	}

	var keyboard models.Keyboard

	keyboard.ID = resultOne[0]["_id"].(primitive.ObjectID)
	keyboard.Name = resultOne[0]["name"].(string)
	keyboard.Price = resultOne[0]["price"].(float64)
	keyboard.Description = resultOne[0]["description"].(string)
	keyboard.Images = resultOne[0]["images"].(primitive.A)
	keyboard.Brand = resultOne[0]["brand"].(string)
	keyboard.ProductType = resultOne[0]["product_type"].(string)
	keyboard.Quantity = resultOne[0]["quantity"].(int32)
	keyboard.Order = resultOne[0]["order"].(int32)

	return c.JSON(keyboard)
}
