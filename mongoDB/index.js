// const {MongoClient} = require('mongodb') Or
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017'
// const database ='zomato'
// const client = new MongoClient(url)


// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database)
//     let collection = db.collection('menu')
//     let response = await collection.find().toArray()
//     console.log(response)
// }
// getData()