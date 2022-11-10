package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email    string             `bson:"email,omitempty" json:"email"`
	Password []byte             `bson:"password,omitempty" json:"-"`
}
