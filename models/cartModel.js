const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        plantId:{
            type:String,
            required:true,
        },
        plantname:{
            type:String,
            required:true,
        },
        image:{
            type:String,
        },
        price:{
            type:String,
            required:true,
        },
        quantity:{
            type:String,
            required:true
        }
    }
)

const carts=mongoose.model("cart",cartSchema)
module.exports=carts