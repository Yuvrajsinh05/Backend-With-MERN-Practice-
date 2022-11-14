const express = require('express')
const EventEmiiter = require('events')
const app = express()
const event = new EventEmiiter();

let count = 0
event.on('countAPI',()=>{
    count++;
    console.log("event called" ,count)
})
app.get('/',(req,res)=>{
    res.send('api called')
    event.emit("countAPI")
})
app.get('/search',(req,res)=>{
    res.send("serch called")
})
app.get('/update',(req,res)=>{
    res.send("update callling")
})
app.listen(5000)