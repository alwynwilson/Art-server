const items = require('../models/itemModel')

exports.addItemController = async (req,res)=>{
    console.log("inside add item function");
    const {id,art_name,artist_name,image,price} = req.body
    const userId = req.payload
    console.log(id,art_name,artist_name,image,price);

    try{
        const exisitingProject = await items.findOne({id})
        if(exisitingProject){
            res.status(406).json("Art already in your database .. Add another one!!")
        }else{
            const newItem = new items({
                id,art_name,artist_name,image,price,userId
            })
            await newItem.save()
            res.status(200).json(newItem)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getHomeItems = async (req,res)=>{
    console.log("Inside get all items");
    try{
        const homeItems = await items.find()
        res.status(200).json(homeItems)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.removeItemController = async (req,res)=>{
    console.log("Inside remove items");
    const {pid} = req.params
    try{
        const removedItem = await items.findByIdAndDelete({id:pid})
        res.status(200).json(removedItem)
    }catch(err){
        res.status(401).json(err)
    }
}