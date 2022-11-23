package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email    string             `bson:"email,omitempty" json:"email"`
	Password []byte             `bson:"password,omitempty" json:"-"`
	Cart     primitive.A        `bson:"cart,omitempty" json:"cart"`
}

type Keyboard struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Order       int32              `bson:"order,omitempty" json:"order"`
	Name        string             `bson:"name,omitempty" json:"name"`
	Price       float64            `bson:"price,omitempty" json:"price"`
	Brand       string             `bson:"brand,omitempty" json:"brand"`
	Quantity    int32              `bson:"quantity,omitempty" json:"quantity"`
	Description string             `bson:"description,omitempty" json:"description"`
	Images      primitive.A        `bson:"images,omitempty" json:"images"`
	ProductType string             `bson:"product_type,omitempty" json:"product_type"`
}
