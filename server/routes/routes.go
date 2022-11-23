package routes

import (
	"github.com/RamazanZholdas/Keyboardist/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/register", controllers.Register)
	app.Post("/login", controllers.Login)
	app.Get("/user", controllers.User)
	app.Post("/logout", controllers.Logout)
	app.Get("/getAllItems", controllers.GetAllItems)
	app.Put("/insertProduct", controllers.InsertProduct)
	app.Put("/addToCart", controllers.AddToCart)
	app.Get("/getCart", controllers.GetAllFromCart)
	app.Get("/getKeyboard/:order", controllers.GetKeyboard)
}
