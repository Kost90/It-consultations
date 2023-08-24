// import Consultant from "../models/Consultant.js";
// import Service from "../models/Services.js";
// import { createError } from "../utils/error.js";

const Consultant = require('../models/Consultant');
const Service = require('../models/Services');
const { createError } = require('../utils/error');
const mongoose = require('mongoose');


const createService = async (req, res, next) => {
    const newService = new Service(req.body);
    try {
        const savedService = await newService.save();
        res.status(200).json(savedService);
    } catch (err) {
        next(err);
    }
}

const updateService = async(req, res, next) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true} )
        res.status(200).json(updatedService);
    } catch (err) {
        next(err);
    }
}

const deleteService = async(req, res, next) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
    res.status(200).json("Service has been deleted");
}catch(err){
    next(err);
}
}

const getService = async(req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json(service);
    } catch (err) {
        next(err);
    }
}

const getServices = async(req, res, next) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        next(err);
    }
}

const countByType = async(req, res, next) => {
    const types = req.query.types.split(",");
    try {
        const list = await Promise.all(types.map(type=>{
            return Service.countDocuments({type:type});
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createService,
    updateService,
    deleteService,
    getService,
    getServices,
    countByType
}
