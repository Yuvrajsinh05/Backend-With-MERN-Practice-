const dbConnect =require('./config')


const insert = async()=>{
    console.log('insert function')
    const db=await dbConnect;
    console.log(db)
    const result=await db.insertOne({
        "location_id":14,
        "location_name":'maninagar char rasta',
        "state_id":8,
        "country_name":"India"
    })
    // const insterted =await db.deleteMany({"state_id":8})
    if(result.acknowledged){
        console.log("data inserted")
    }
    console.log(result)
    // console.log(insterted)
}
insert();