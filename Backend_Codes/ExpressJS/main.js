import express from "express"
// const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
//This is known as "middleware" and is used to give access some files to public(Use the same as the folder to share with public)

//app.get or app.post or app.put or app.delete(path,handler)
//handler takes a function and request and response as parameters
app.get('/', (req, res) => {
  res.send('Hello World2!')
})//url-->127.0.0.1:3000

app.get('/about', (req, res) => {
  res.send('About Us')
})//url-->127.0.0.1:3000/about

app.get('/contact', (req, res) => {
  res.send('Contact Me')
})//url-->127.0.0.1:3000/contact

app.get('/blog', (req, res) => {
  res.send('blog page')
})//url-->127.0.0.1:3000/blog

app.get('/blog/into-to-express', (req, res) => {
  res.send('hello express')
})//url-->127.0.0.1:3000/blog/into-to-express

//This method is used to create blocks for our website but this isnt a efficient way to do; so now we use "slug" which is a parameter

app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}` )
}) //This will create new blocks as user gave input in browswer url i,e 127.0.0.1:3000/blog/into-to-express/user-input 

app.get('/blog/:slug/:second', (req, res) => {
  res.send(`hello ${req.params.slug} and ${req.params.second}` )
  console.log(req)
  console.log(req.params) //This will return--> { slug: 'into-to-express', second: 'user-input-secondInput' }
  console.log(req.query)  //output--> { mode: 'dark', region: 'in' }
}) //127.0.0.1:3000/blog/into-to-express/user-input-secondInput?mode=dark&region=in

//params present in url and query is an object which holds parameters when we defined them by certain keywords like ?,t,in
//for example-->127.0.0.1:3000/blog/into-to-express/user-input?mode


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

