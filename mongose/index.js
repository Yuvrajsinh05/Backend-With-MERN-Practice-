// const mongoose = require('mongoose');

// const main=async()=>{
//     await mongoose.connect("mongodb://localhost:27017/zomato")
//     const ProductSchema = new mongoose.Schema({
//         name:String,
//         price:Number,
//         brand:String,
//         Category:String
//     });
//     const ProductsModal =mongoose.model('locations')
//     let data = new ProductsModal({name:'heroku' , price:1000 ,brand:"maxx", Category:"Mobile"})
//     let result =await data.save();
//     console.log(result)
// }


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/zomato")

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    Category:String
});

const main=async()=>{
    const ProductsModal =mongoose.model('locations',ProductSchema)
    let data = new ProductsModal({name:'heroku' , price:1000 ,brand:"maxx", Category:"Mobile"})
    let result =await data.save();
    console.log(result)
}
main()