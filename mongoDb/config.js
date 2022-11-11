const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017';
const client =new MongoClient(url)

async function dbConnect(){
    let result = await client.connect()
    let db= result.db('zomato')
    return db.collection('locations')
}



// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         // console.log(data)
//         return data
//     })
// })

// or //

const main = async()=>{
    let data = await dbConnect();
    data = await data.find().toArray()
    console.log(data)
}
main()

module.exports=dbConnect()
// console.log(dbConnect() ,"what is this")

