package database

import (
	"context"
	"log"

	"github.com/RamazanZholdas/Keyboardist/models"
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

func CreateCollection(databaseName string, collection string) {
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

func FindAllFromDb(databaseName string, collection string) (keyboards []*models.Keyboard, err error) {
	ctx := context.Background()
	db := client.Database(databaseName)
	keyboardCollection := db.Collection(collection)
	fCursor, err := keyboardCollection.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	if err = fCursor.All(ctx, &keyboards); err != nil {
		log.Fatal(err)
	}
	return keyboards, nil
}

func UpdateOneUserFromDb(databaseName string, collection string, user models.User) *mongo.UpdateResult {
	ctx := context.Background()
	db := client.Database(databaseName)
	filter := bson.M{"email": user.Email}
	update := bson.M{"$set": bson.M{"cart": user.Cart}}
	result, err := db.Collection(collection).UpdateOne(ctx, filter, update)
	if err != nil {
		log.Fatal(err)
	}
	return result
}

//function that counts elements in collection
func CountElementsInCollection(databaseName string, collection string) int64 {
	ctx := context.Background()
	db := client.Database(databaseName)
	count, err := db.Collection(collection).CountDocuments(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	return count
}

/*

func FindAllFromDb(databaseName string, collection string) []bson.M {
	ctx := context.Background()
	db := client.Database(databaseName)
	userCollection := db.Collection(collection)
	fCursor, err := userCollection.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	var resultAll []bson.M
	if err = fCursor.All(ctx, &resultAll); err != nil {
		log.Fatal(err)
	}
	return resultAll
}

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
