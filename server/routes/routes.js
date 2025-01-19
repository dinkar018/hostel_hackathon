const express= require('express');
const router = express.Router();

const { getAllComplains,createComplain } = require('../controller/control');

router.route('/').get(getAllComplains).post(createComplain);

module.exports= router