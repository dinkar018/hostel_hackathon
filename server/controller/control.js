const Task = require('../model/user')

const getAllComplains= async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({ msg: error})
    }
}
  

const createComplain = async (req, res) => {
    const body = req.body;
    if (!body || !body.id || !body.hostel || !body.contact || !body.domain || !body.details || !body.urgency || !body.subdomain || !body.Time) {
        return res.status(400).json({ msg: "Please input all the fields" });
    }
    try {
        const task = await Task.create({
            id: body.id,
            hostel: body.hostel,
            roomNumber: body.roomNumber,
            contact: body.contact,
            domain: body.domain,
            details: body.details,
            urgency: body.urgency,
            subdomain: body.subdomain,
            Time: body.Time,
        });

        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
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

module.exports = {
    getAllComplains,
    createComplain,
    getCivilComplains,
    getElectricalComplains,
    getPlumbingComplains,
    getWaterCoolerComplains,
    getCompletedComplains,
    getActiveComplains
};