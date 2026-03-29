const plants = require('../models/plantModel')

exports.addPlantController = async (req, res) => {
    console.log('inside addPlantController');

    const { plantname, price, category, quantity } = req.body
    console.log(req.body);
    

    const image = req.file.filename
    try {
        const newPlant = new plants({ plantname, price, category, quantity, image })
        await newPlant.save()
        console.log(newPlant);
        res.status(200).json(newPlant)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

exports.allPlantController=async(req,res)=>{
    console.log("inside allPlantController");

    try{
        const allPlant= await plants.find()
        // .sort({date:-1})
        res.status(200).json(allPlant)
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.deletePlantController=async(req,res)=>{
    console.log("inside editPlantController");

    const {plantname}=req.params

    try{
        const removePlant = await plants.findOneAndDelete({plantname})
        if(removePlant){
            res.status(200).json(removePlant)
        }
        else{
            res.status(406).json("data not found")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.editPlantControler=async(req,res)=>{
    console.log("inside editPlantControler");

    const {plantname}=req.params

    const {price,category,image}=req.body
    
    const uploadImage=req.file?req.file.filename:image

    try{
        const updatePlant=await plants.findOneAndUpdate({plantname},{plantname,price,category,image:uploadImage},{new:true})
        res.status(200).json(updatePlant)
    }
    catch(err){
        res.status(401).json(err)
    }
    
}