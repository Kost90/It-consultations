const express = require('express');
const router = express.Router();

const {createService,
    updateService,
    deleteService,
    getService,
    getServices,
    countByType} = require('../Contoller/serviceController');

//Create
router.post("/", createService);
//Update
router.put("/:id", updateService)
//Delete
router.delete("/:id/", deleteService)
//GET
router.get("/find/:id", getService);
//GET ALL
router.get("/", getServices);
//GET NUMBER OF SERVICES
router.get("/countByType", countByType);

module.exports = router;




