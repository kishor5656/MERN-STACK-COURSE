const express=require('express');
const router = express.Router();
const dataController=require('../controllers/dataController');


//get all data

router.get('/',dataController.getAllData);

//get a single data

router.get('/:id',dataController.getDataById);

//create new data by item

router.post('/',dataController.createData);

//update data iem

router.put('/:id',dataController.updateData);

//Delete data item

router.delete('/:id',dataController.deleteData);

module.exports=router;