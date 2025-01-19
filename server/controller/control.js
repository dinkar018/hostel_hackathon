const Task = require('../models/user')

const getAllComplains= async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({ msg: error})
    }
}
const createComplain = async (req,res)=>{
    body=req.body
    if(!body) res.status(404).json("please input all the fields")
    try{
    const task = await Task.create({
        id:body.id,
        hostel:body.hostel,
        contact:body.contact,
        domain:body.domain,
        details:body.details,
        urgency:body.urgency,
        subdomain:body.subdomain,
        Time:body.time,

    })

    res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports ={
    getAllComplains,createComplain
}
