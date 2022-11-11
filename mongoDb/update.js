const dbConnect = require('./config')

const updateData = async() => {
    let data =await dbConnect;
    let result =await data.updateMany({
        "state_id": 8
    }, {
        $set: { "location_name": 'maninagar railway station' }
    }
    )
    console.log(result)
}
updateData()