const express= require('express');
const router = express.Router();

const { getAllComplains,createComplain,getCivilComplains,getElectricalComplains,getPlumbingComplains,getWaterCoolerComplains,getCompletedComplains,getActiveComplains } = require('../controller/control');

router.route('/').get(getAllComplains).post(createComplain);
router.route('/civil').get(getCivilComplains);
router.route('/electrical').get(getElectricalComplains);
router.route('/plumbing').get(getPlumbingComplains);
router.route('/watercooler').get(getWaterCoolerComplains);
router.route('/completed').get(getCompletedComplains);
router.route('/active').get(getActiveComplains);

module.exports= router