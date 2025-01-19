const express= require('express');
const router = express.Router();

const { getAllTasks,createTask } = require('../controller/control');

router.route('/').get(getAllTasks).post(createTask);