// const express = require('express')
// const app=express();

// app.get('',(req,res)=>{
//     console.log("data send by browser" ,req.query)
//    res.send("hello , this is home page ")
// })
// app.get('/about',(req,res)=>{
//    res.send("hello , this is about page ")
// })

// app.listen(5000)



// const express = require('express')
// const app=express();
// app.get('',(req,res)=>{
//     if(req.query){
//       console.log("data send by browser" ,req.query)
//     }
//    res.send(
//     `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login-1</title>
//     <style>
//       body{
//   background-image: linear-gradient(45deg, #000000, #2d3436);
//   height: 135vh ;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
// }
// hr{
//     color: white;
// }

// h1,h3,h4,h5{
//   color: white;
// }
// h6{
//     color:grey;
//     font-family: monospace;
//     font-size: 13px;
// }
// .h6{
//   color: gray;
//   font-size: 13px;
//  }

// form{
//     background-color: rgb(30 35 36);
//     width: 35vw;
// }

// label{
//     color: white;
//     font-family: monospace;
// }

// #but{
//     background-color: #101010;
//     border: none;
// }

//   input[type=password], select {
//     background-color:  white;
//     border: none;
//   }  
//   input[type=text], select {
//     background-color:  white;
//     border: none;
//   }    
// #but{
//     background-color:  #242a2c;
//     border: none;
//   }
  
// #but:hover {
//     background-color: rgb(34, 30, 30);
//   }

// .link{
//   /* text-decoration: none; */
//   color: gray;
//   text-align: center;
// }
// span,p{
//   color: white;
// }
// @media only screen and (max-width: 1200px) {
//   form{
//     width: 60vw;
//   }
// }
// @media only screen and (max-width: 1000px) {
//  form{
//    width: 65vw;
//  }
// }
// @media only screen and (max-width: 900px) {
//  form{
//    width: 70vw;
//  }
// }
// @media only screen and (max-width: 800px) {
//  form{
//    width: 75vw;
//  }
// }
// @media only screen and (max-width: 500px) {
//  form{
//    width: 90vw;
//  }
// }
//     </style>
//     </head>
// <body class="">
//
//      
//     <h1>hey buddy </h1>
// </body>
// </html>
//     `
//    )
// })
// app.get('/about',(req,res)=>{
//    res.send("hello , this is about page ")
// })

// app.listen(5000)


// const express = require('express')
// const path = require('path')

// const app = express();
// const publicPath=path.join(__dirname,'login-1')

// // app.use(express.static(publicPath))
// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/login1.html`)
// })
// app.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/login2.html`)
// })
// app.listen(5000)





// const express = require('express')
// const path = require('path')

// const app = express();
// const publicPath=path.join(__dirname,'login-1')

// app.set('view engine','ejs');

// app.use(express.static(publicPath))
// app.get('',(_,res)=>{

//     res.sendFile(`${publicPath}/login1.html` )
// })
// app.get('/profile',(_,res)=>{
//     const user ={
//         name:"uv Banna",
//         email:"uv@test",
//         city:"ahemdabad",
//         skills:["javascript","nodeJs","reactJS","expressJS"]
//     }
//     res.render('profile' ,{user})
// })
// app.get('/login',(_,res)=>{
//     res.render('login')
// })
// app.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/login2.html`)
// })
// app.listen(5000)




// const express = require('express');
// const app = express();

// const reqFilter = (req,res,next)=>{
//     // console.log('reqFilter')
//     if(!req.query.age){
//         res.send("please Provide Age")
//     }
//     else if(req.query.age<18){
//         res.send("<h1> Go watch Pogo idiot </h1>")
//     }
//     else{
//         next();
//     }
   
// }
// app.use(reqFilter)

// app.get('/',(req,res)=>{
//     res.send('Welcome to Home Page')
// })
// app.get('/users',(req,res)=>{
//     res.send('Welcome to user Page')
// })

// app.listen(5000)


// const express = require('express');
// const app = express();

// const reqFilter = (req,res,next)=>{
//     // console.log('reqFilter')
//     if(!req.query.age){
//         res.send("please Provide Age")
//     }
//     else if(req.query.age<18){
//         res.send("<h1> Go watch Pogo idiot </h1>")
//     }
//     else{
//         next();
//     }
   
// }
// app.get('/',(req,res)=>{
//     res.send('Welcome to Home Page')
// })
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('Welcome to user Page')
// })
// app.get('/about',(req,res)=>{
//     res.send('Welcome to about Page')
// })

// app.listen(5000)




// const express = require('express');
// const app = express();
// const reqFilter = require("./middleware")

// app.get('/',(req,res)=>{
//     res.send('Welcome to Home Page')
// })
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('Welcome to user Page')
// })
// app.get('/about',(req,res)=>{
//     res.send('Welcome to about Page')
// })

// app.listen(5000)





const express = require('express');
const app = express();
const reqFilter = require("./middleware")
const route = express.Router()

route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.get('/users',(req,res)=>{
    res.send('Welcome to user Page')
})
route.get('/about',(req,res)=>{
    res.send('Welcome to about Page')
})
route.get('/contact',(req,res)=>{
    res.send('Welcome to contact Page')
})
app.use('/',route)

app.listen(5000)





