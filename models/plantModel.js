const mongoose = require ('mongoose')

const plantSchema = new mongoose.Schema(
    {
        plantname:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        image:{
            type:String,
        },
        quantity:{
            type:Number,
            required:true,
        }
        // date:{
        //     type:Date,
        //     default:Date.now,
        // }
    }
)

const plants=mongoose.model("plants",plantSchema)
module.exports=plants