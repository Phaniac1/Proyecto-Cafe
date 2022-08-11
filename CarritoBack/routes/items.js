const express = require('express')
const router = express.Router();
//modelos
const Item = require('../models/items');
//mock
const itemMock = require('../mock/items.json');

//GET items
router.get('/', (req, res) =>{
    res.send(itemMock);
});

//Crear item
router.post('/',async (req, res) =>{
    console.log(req.body);
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    });
    try{
const newItem = await item.save();
res.json(newItem);
    }catch(err){
        res.json({message:err.message});
    }

});

module.exports = router;