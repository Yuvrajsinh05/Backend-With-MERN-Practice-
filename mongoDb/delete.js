const dbConnect = require('./config')

const deleteData=async()=>{
    let data = await dbConnect;
    let result = await data.deleteMany({"state_id":8})
    console.log(result)
    if(result.acknowledged){
        console.log("data deleted")
    }
}
deleteData() 