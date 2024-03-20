import express from "express";
import users from "./MOCK_DATA.json" with {type: 'json'};

const app = express();
const PORT = 8000;

//routes

app.get("/users",(req,res)=>{
    //HTML format for mobile users
    const html= `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
});

app.get("/api/users",(req,res)=>{
    // JSON format
    return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
    //id is a string so we have to convert it in Number format bcuz the IDs we have in json file are all numbers

    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user)
});

//POST request:
app.post("/api/users/:id",(req,res)=>{
    //TODO: create new user
    res.json({staus:"pending"})
});

//PATCH rqts
app.patch("/api/users/:id",(req,res)=>{
    //TODO: update new user
    res.json({staus:"pending"})
});

//DELETE

app.delete("/api/users/:id",(req,res)=>{
    //TODO: delete a user
    res.json({staus:"pending"})
});

//If we want to do multiple rqst on the same route the we also can do something like:
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user)
})
.patch((req,res)=>{return res.json({staus:"pending"})})
.delete((req,res)=>{return res.json({staus:"pending"})})

app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))