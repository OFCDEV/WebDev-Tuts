import express from "express";
import users from "./MOCK_DATA.json" with {type:'json'};

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready");
});
app.get('/api/users',(req,res)=>{
    res.json(users);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is ready at http://localhost:${PORT}/`);
})