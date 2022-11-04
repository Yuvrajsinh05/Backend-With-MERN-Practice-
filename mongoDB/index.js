const dbConnect =require('./mongodb')
// // console.warn(dbConnect())
// dbConnect().then((res)=>{
//    res.find({"menu_id":70}).toArray().then((data)=>{
//      console.log(data)
//    })
// })

const main =async()=>{
    // console.log("main function called")
    let data = await dbConnect
    ;
    data =await data.find().toArray()
    console.log(data);

}
main()

