const data = require('../models/data');

exports.getAllData=(req,res)=>{
    res.json(data);
};

exports.getDataById=(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=data.find(item => item.id === itemId);
    if(!item){
        return res.status(404).json({message:'Data not found'});
    }
    res.json(item);
};

//create data item

exports.createData= (req,res)=>{
    const newItem={
        id: data.length +1,
        name: req.body.name,
        description: req.body.description
    };

    data.push(newItem);
    res.status(201).json(newItem);
};

//update data item

exports.updateData=(req,res)=>{
    const itemId= parseInt(req.params.id);
    const itemIndex= data.findIndex(item => item.id === itemId);
    if(itemIndex === -1){
        return res.status(404).json({message:'Data not Found'});
    }
    data[itemIndex] = {
        id: itemId,
        name:req.body.name,
        description:req.body.description
    };
    res.json(data[itemIndex]);
};

//delete data item

exports.deleteData=(req,res)=>{
    const itemId= parseInt(req.params.id);
    const itemIndex=data.findIndex(item => item.id === itemId);
    if(itemIndex === -1){
        return res.json.status(404).json({message:'Data not found'});
    }
    data.splice(itemIndex,1);
    res.json({message: 'Data deleted successfully'});
};