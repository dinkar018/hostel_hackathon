const Task = require('../model/user')

const getAllComplains= async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({ msg: error})
    }
}
const getCivilComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ domain : "civil"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const getElectricalComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ domain : "electrical"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const getPlumbingComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ domain : "plumbing"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const getWaterCoolerComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ domain : "watercooler"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const getCompletedComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ status : "completed"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const getActiveComplains = async (req,res)=>{
    try{
        const temp = await Task.find({ status : "active"})
        res.status(200).json({ temp })
    }catch(error){
        res.status(500).json({msg: error})
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
        Time:body.Time,

    })

    res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports ={
    getAllComplains,createComplain,getCivilComplains,getElectricalComplains,getPlumbingComplains,getWaterCoolerComplains,getCompletedComplains,getActiveComplains
}
