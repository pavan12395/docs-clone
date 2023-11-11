import {ConnectDB} from './database/db';
import express from 'express';


const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/hello",(req,res,next)=>{
    res.status(200).json({message:"hello world"});
});


app.listen(5023,()=>
{
    ConnectDB();
    console.log("Server listening at Port : 5023");
});