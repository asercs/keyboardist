package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"

	"github.com/RamazanZholdas/Keyboardist/database"
	"github.com/RamazanZholdas/Keyboardist/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

var (
	ctx = context.Background()
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	client := database.ConnectToMongo(os.Getenv("MONGO_URI"))
	defer client.Disconnect(ctx)

	database.CreateDatabase(os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"))
	defer database.DropDatabase(os.Getenv("DATABASE_NAME"))

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))

	routes.Setup(app)

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		<-c
		fmt.Println("Gracefully shutting down...")
		_ = app.Shutdown()
	}()

	if err := app.Listen(":8000"); err != nil {
		log.Panic(err)
	}

	fmt.Println("Running cleanup tasks...")
}
