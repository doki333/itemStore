const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/necessaries');
const methodOverride = require('method-override');
const { type } = require('os');
const _ = require('lodash');

mongoose.connect('mongodb://localhost:27017/itemStore')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)});
    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('items/index')
    });

app.get('/items/:itemName', async (req, res) => {
    const { itemName } = req.params;
    const foundItems = await Item.find({itemName: itemName});
    const initialItem = await Item.findOne({itemName: itemName});
    res.render('items/show', { foundItems, itemName, initialItem });
});

app.get('/:category', async (req,res) => {
    const { category } = req.params; 
    const items = await Item.find({category: category});
    const initialItem = await Item.findOne({ category: category });
    res.render(`items/${category}`, { items, category, initialItem })
});



app.get('/items/:category/new', async (req, res) => {
    const { category } = req.params; 
    const items = await Item.find({ category: category })
    const initialItem = await Item.findOne({ category: category });
    const initialValue = await _.uniqBy(items, 'mallCode')
    res.render('items/new',{ items, category, initialItem, initialValue })
});


app.post('/items/:category', async (req, res) => {
    const { category } = req.params; 
    const newItems = new Item(req.body);
    await newItems.save()
    res.redirect(`/${category}`)
});


app.get('/items/:category/editMode', async (req, res) => {
    const { category } = req.params; 
    const items = await Item.find({category: category})
    const initialItem = await Item.findOne({ category: category })
    res.render('items/editMode', { category, items, initialItem })
});

app.get('/items/:category/editMode/:id', async (req, res) => {
    const { category } = req.params; 
    const { id } = req.params;
    const items = await Item.find({category: category})
    const foundItem = await Item.findById(id)
    const initialItem = await Item.findOne({ category: category })
    res.render('items/editMode', { category, items, initialItem,foundItem })
});



app.get('/items/:category/edit/:id', async (req, res) => {
    const { category } = req.params; 
    const { id } = req.params;
    const items = await Item.find({category: category})
    const foundItem = await Item.findById(id)
    const initialValue = await _.uniqBy(items, 'mallCode')
    res.render('items/edit', { category, items, foundItem, initialValue, id })
});

app.put('/items/:category/:id', async (req, res) => {
    const { category } = req.params; 
    const { id } = req.params;
    const editItem = await Item.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
    res.redirect(`/${editItem.category}`);
});

app.delete('/items/:category/editMode/:id', async (req, res) => {
    const { category } = req.params; 
    const { id } = req.params;
    const deleteItem = await Item.findByIdAndDelete(id);
    console.log(deleteItem);
    res.redirect(`/items/${category}/editMode`)
})



app.listen(7000, () => {
    console.log("APP IS PORT ON 7000!")
});
