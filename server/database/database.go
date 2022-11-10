package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func ConnectToMongo(mongoUri string) *mongo.Client {
	var err error
	client, err = mongo.NewClient(options.Client().ApplyURI(mongoUri))
	if err != nil {
		log.Fatal(err)
	}
	ctx := context.Background()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	return client
}

func CreateDatabase(databaseName string, collection string) {
	ctx := context.Background()
	db := client.Database(databaseName)
	err := db.CreateCollection(ctx, collection)
	if err != nil {
		log.Fatal(err)
	}
}

func InsertOneToDb(databaseName string, collection string, data interface{}) *mongo.InsertOneResult {
	ctx := context.Background()
	db := client.Database(databaseName)
	result, err := db.Collection(collection).InsertOne(ctx, data)
	if err != nil {
		log.Fatal(err)
	}
	return result
}

func DropDatabase(databaseName string) {
	ctx := context.Background()
	err := client.Database(databaseName).Drop(ctx)
	if err != nil {
		log.Fatal(err)
	}
}

func FindOneFromDb(databaseName string, collection string, filter bson.M) []bson.M {
	ctx := context.Background()
	db := client.Database(databaseName)
	userCollection := db.Collection(collection)
	fCursor, err := userCollection.Find(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}
	var resultOne []bson.M
	if err = fCursor.All(ctx, &resultOne); err != nil {
		log.Fatal(err)
	}
	return resultOne
}

/*
client, err := mongo.NewClient(options.Client().ApplyURI(os.Getenv("MONGO_URI")))
	if err != nil {
		log.Fatal(err)
	}
	ctx := context.Background()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(ctx)
	demoDB := client.Database("demo")
	err = demoDB.CreateCollection(ctx, "users")
	if err != nil {
		log.Fatal(err)
	}
	defer demoDB.Drop(ctx)

	userCollection := demoDB.Collection("users")
	defer userCollection.Drop(ctx)

	result, err := userCollection.InsertOne(ctx, bson.D{{Key: "name", Value: "John"}, {Key: "age", Value: 25}})
	if err != nil {
		log.Fatal(err)
	}
	log.Println(result)

	cursor, err := userCollection.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var result bson.M
		err := cursor.Decode(&result)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(result)
	}

	fmt.Println("Done")

	filter := bson.M{"age": "25"}
	fCursor, err := userCollection.Find(ctx, filter)
	if err != nil {
		log.Fatal(err)
	}

	var resultOne []bson.M
	if err = fCursor.All(ctx, &resultOne); err != nil {
		log.Fatal(err)
	}
	fmt.Println(result.InsertedID)
*/
