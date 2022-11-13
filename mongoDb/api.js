const { json } = require('express');
const express =require('express')
const dbConnect = require('./config')
const mongoDb =require('mongoDb')
const app= express();

app.use(express.json())

app.get('/',async(req,res)=>{
    let data = await dbConnect
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
})
app.post('/',async(req,res)=>{
    console.log(req.body)    
    let data = await dbConnect
    let result = data.insertMany(req.body)
    res.send(result)
})
app.put('/:name',async(req,res)=>{
    let data = await dbConnect
    let result = data.updateOne(
        {state:req.params.state},
        {$set:req.body}
        )
    console.log(req.body)
    res.send({result:"update"})
})
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    const data = await dbConnect
    const result =await data.deleteOne({_id:new mongoDb.ObjectId(req.params.id)})
    res.send("done")
})
app.listen(5000,()=>{
    console.log("server is running on PORT 5000 .......")
})