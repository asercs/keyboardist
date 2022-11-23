package controllers

import (
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/gofiber/fiber/v2"
)

func GetAllItems(c *fiber.Ctx) error {
	result, err := database.FindAllFromDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"))
	if result == nil {
		return c.Status(401).JSON(fiber.Map{
			"message": "Shop is empty",
		})
	}
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "Internal server error",
		})
	}

	return c.JSON(result)
}
