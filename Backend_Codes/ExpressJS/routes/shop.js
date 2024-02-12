import express from "express";

const shop = express.Router()

shop.get('/',(req,res)=>{
    res.send('Welcome to shop page')
})

shop.get('/items',(req,res)=>{
    res.send('List of items:')
})

shop.get('/uritems/:yourInput',(req,res)=>{
    res.send(`You Entered this items: ${req.params.yourInput}`)
})

export default shop;