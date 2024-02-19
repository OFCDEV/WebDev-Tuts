//https://www.npmjs.com/package/mongodb


import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const todo = new Todo({title:"My first todo",desc:"Description of this code",isDone:false})
    todo.save();
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`App is running on ${3000}`)
})
