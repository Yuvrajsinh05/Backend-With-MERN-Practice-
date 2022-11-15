//   < Create Basic static  Server >

// const http = require("http")
// function data(req,res)
// {
//     res.write("Hey their ! this is from server side  ! fuck you budddy ")
//     res.end();
// }
// const server = http.createServer(data).listen(5000)

//   </Create Basic static  Server >


// <> Display JSON data to Browser <>

// const http = require("http")
// const data = require("./data")
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application \ JSON'});
//   res.write(JSON.stringify(data));
// //   res.write(data)
//   console.log(JSON.stringify(data));
//   res.end()
// }).listen(8800,()=>{
//     console.log("serive is running on port 8800")
// })


// <> Display JSON data to Browser </>


//  <>Adding file with via terminal <> 

// console.log(process.argv)(This property returns an array containing the arguments passed to the process when run it in the command line. The first element is the process execution path and the second element is the path for the js file.)

// const fs = require('fs')
// const input = process.argv
// if(input[2]=='add')                  
// {
//   fs.writeFileSync(input[3],input[4])
// }else if(input[2]='remove')
// {
//   fs.unlinkSync(input[3])
// }
// else{
//   console.log("invalid input")
// }
// (in terminal just write => (for adding) node index nnoadd word.txt "hew brother how are doing?" , (for removing) node index remove word.txt)

//  <>Adding file with via terminal </> 

// console.log(process.argv)


// create and read in directory

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname , 'files')
// console.warn(dirPath,"path")
// for(var i =0;i<50;i++){
//   fs.writeFileSync(dirPath+"/hello"+i+".txt","what's going in")
// }
// fs.readdir(dirPath,(err,files)=>{
//    files.forEach((item)=>{
//        console.log("file name is ",item)
//    })
// })

// console.log(__dirname)


// crud oprations

// const fs = require("fs")
// const path = require("path")
// const dirPath =path.join(__dirname,'crud');
// const filepath = `${dirPath}/apple.text`

// fs.writeFileSync(filepath,'This is a simple text file')
// fs.readFile(filepath,'utf-8',(err,item)=>{
//   console.log(item)
// })

// fs.appendFile(filepath,'  and file name is apple.txt',(err)=>{
//   if(!err) console.log("file updated")
// })

// fs.rename(filepath,`${dirPath}/fuck.file`,(err)=>{
//   if(!err) console.log("file renamed")
// })

// fs.unlinkSync(`${dirPath}/fuck.file`)


// setTimeout

// let a =10
// let b =0
// console.log("start exe .....")

// setTimeout(()=>{
//   console.log("logic exe .....")
//   b=20
// },2000)
// console.log(a+b)


// Promises

// let a =10
// let b =0
// console.log("start exe .....")
// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//       },2000)
// })
// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b , "data after when wait is over")
// })
// console.log(a+b ,"Wait a while.........")


// execution of node code

// console.log("stariging up")
// setTimeout(()=>{
//    console.log("2 second log")   
// },2000)
// setTimeout(()=>{
//    console.log("0 second log")   
// },0)
// console.log("finishing up")



// const os = require('os')
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// os.hostname
// os.totalmem
// os.platform
// os.userInfo
