const mongoose = require('mongoose');
const Item = require('./models/necessaries');

mongoose.connect('mongodb://localhost:27017/itemStore')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)});
    

const seedItems= [
    {
        district: 'Gangseo-gu',
        mallCode: 42,
        mallName: 'Emart(GaYang-jeom)',
        itemName: 'cucumber',
        price: 2780
    },
    {
        district: 'Gangseo-gu',
        mallCode: 42,
        mallName: 'Emart(GaYang-jeom)',
        itemName: 'eggs',
        price: 6900
    },
    {
        district: 'Gangseo-gu',
        mallCode: 42,
        mallName: 'Emart(GaYang-jeom)',
        itemName: 'apple',
        price: 9800
    },
    {
        district: 'Gangseo-gu',
        mallCode: 42,
        mallName: 'Emart(GaYang-jeom)',
        itemName: 'onion',
        price: 3480
    },
    {
        district: 'Gangseo-gu',
        mallCode: 42,
        mallName: 'Emart(GaYang-jeom)',
        itemName: 'squid',
        price: 3980
    },

    {
        district: 'Gangseo-gu',
        mallCode: 40,
        mallName:'HomePlus(Deungchon-jeom)',
        itemName: 'cucumber',
        price: 1990
    },
    {
        district: 'Gangseo-gu',
        mallCode: 40,
        mallName:'HomePlus(Deungchon-jeom)',
        itemName: 'eggs',
        price: 6950
    },
    {
        district: 'Gangseo-gu',
        mallCode: 40,
        mallName:'HomePlus(Deungchon-jeom)',
        itemName: 'apple',
        price: 11990
    },
    {
        district: 'Gangseo-gu',
        mallCode: 40,
        mallName:'HomePlus(Deungchon-jeom)',
        itemName: 'onion',
        price: 3650
    },
    {
        district: 'Gangseo-gu',
        mallCode: 40,
        mallName:'HomePlus(Deungchon-jeom)',
        itemName: 'squid',
        price: 3990
    },
    {
        district: 'Gangdong-gu',
        mallCode: 154,
        mallName: 'HomePlus(Gangdong-jeom)',
        itemName: 'cucumber',
        price: 2290
    },
    {
        district: 'Gangdong-gu',
        mallCode: 154,
        mallName: 'HomePlus(Gangdong-jeom)',
        itemName: 'eggs',
        price: 6950
    },
    {
        district: 'Gangdong-gu',
        mallCode: 154,
        mallName: 'HomePlus(Gangdong-jeom)',
        itemName: 'apple',
        price: 13990
    },
    {
        district: 'Gangdong-gu',
        mallCode: 154,
        mallName: 'HomePlus(Gangdong-jeom)',
        itemName: 'onion',
        price: 3650
    },
    {
        district: 'Gangdong-gu',
        mallCode: 154,
        mallName: 'HomePlus(Gangdong-jeom)',
        itemName: 'squid',
        price: 3980
    },
    {
        district: 'Gangdong-gu',
        mallCode: 153,
        mallName: 'Emart(Myeong-il-jeom)',
        itemName: 'cucumber',
        price: 2980
    },
    {
        district: 'Gangdong-gu',
        mallCode: 153,
        mallName: 'Emart(Myeong-il-jeom)',
        itemName: 'eggs',
        price: 6900
    },
    {
        district: 'Gangdong-gu',
        mallCode: 153,
        mallName: 'Emart(Myeong-il-jeom)',
        itemName: 'apple',
        price: 12800
    },
    {
        district: 'Gangdong-gu',
        mallCode: 153,
        mallName: 'Emart(Myeong-il-jeom)',
        itemName: 'onion',
        price: 3980
    },
    {
        district: 'Gangdong-gu',
        mallCode: 153,
        mallName: 'Emart(Myeong-il-jeom)',
        itemName: 'squid',
        price: 3480
    }
]

Item.insertMany(seedItems)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })