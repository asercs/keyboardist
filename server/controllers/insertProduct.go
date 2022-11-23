package controllers

import (
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/gofiber/fiber/v2"
)

func InsertProduct(c *fiber.Ctx) error {
	var product models.Keyboard

	if err := c.BodyParser(&product); err != nil {
		return err
	}

	count := database.CountElementsInCollection(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"))
	count++

	var productWithoutId models.Keyboard

	productWithoutId.Name = product.Name
	productWithoutId.Price = product.Price
	productWithoutId.Description = product.Description
	productWithoutId.Images = product.Images
	productWithoutId.ProductType = product.ProductType
	productWithoutId.Brand = product.Brand
	productWithoutId.Quantity = product.Quantity
	productWithoutId.Order = int32(count)

	database.InsertOneToDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_KEYBOARD"), productWithoutId)

	return c.JSON(product)
}
