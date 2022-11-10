package controllers

import (
	"os"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Email:    data["email"],
		Password: password,
	}

	database.InsertOneToDb(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"), user)

	return c.JSON(user)
}
