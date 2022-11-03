module.exports = reqFilter = (req,res,next)=>{
    // console.log('reqFilter')
    if(!req.query.age){
        res.send("please Provide Age")
    }
    else if(req.query.age<18){
        res.send("<h1> Go watch Pogo idiot </h1>")
    }
    else{
        next();
    }
   
}

