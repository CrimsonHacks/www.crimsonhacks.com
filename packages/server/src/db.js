import mongodb from "mongodb"

let client
let users
let apps

const mongo = mongodb.MongoClient

mongo.connect(
  process.env.DB_URL,
  { useNewUrlParser: true },
  (err, dbClient) => {
    if (err) {
      console.error(err)
      return
    }

    client = dbClient

    const db = client.db("ch2019")
    users = db.collection("users")
    apps = db.collection("apps")
  },
)

export { client, users, apps }
export default client
