const mongoose=require('mongoose');
const connectionString=process.env.connectionString


mongoose.connect(connectionString).then(res=>{
    console.log("connect to server");
    
}).catch(err=>{
    console.log("connection faild",err);
    
})