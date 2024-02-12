//Let we have some variables from and we want to put it in the "/" path or url endline. We can do this with the help of EJS we can also adds Array,List or objects

import express from "express"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.set('view engine','ejs')    //setting up ejs

app.get('/',(req,res)=>{
    let siteName = "Adidas"
    let searchName = "Search Now"
    res.render("index",{siteName:siteName,searchName:searchName})
})

app.get('/blog/:slug',(req,res)=>{
    let blogTitle = "Why Adidas?"
    let blogContent = "Its a good brand"
    res.render("blogpost",{blogContent: blogContent,blogTitle:blogTitle}) //passing variables in ejs template
})

app.listen(port,()=>{
    console.log(`My app is listening on port ${port}`)
})