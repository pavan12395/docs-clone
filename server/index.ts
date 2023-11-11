import {ConnectDB} from './database/db';
import express from 'express';
import { SignUpRequest,SignUpResponse,LoginRequest,LoginResponse} from './types/type';
import { ValidatePassword, ValidateSignUpRequest } from './validate/validator';
import User from './models/User';


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

app.post("/signUp",async (req,res,next)=>
{
    const signUpRequest = req.body as SignUpRequest
    const validatorResponse : boolean = ValidateSignUpRequest(signUpRequest);
    if(validatorResponse){
        try{
        await User.create({name: signUpRequest.name,password : signUpRequest.password})
        var signUpResponse : SignUpResponse = {message:"User created!"};
        return res.status(200).json(signUpResponse);
        }
        catch(e){
            var signUpResponse : SignUpResponse = {message:"User name already exists"};
            return res.status(200).json(signUpResponse);
        }
    }
    else {
        var signUpResponse : SignUpResponse = {message:"Validation failed for Input data!"};
        return res.status(400).json(signUpResponse);
    }
});

app.get("/login",async (req,res,next)=>
{
    const loginRequest = req.body as LoginRequest;
    const validatorResponse : boolean = ValidatePassword(loginRequest.password);
    if(validatorResponse){
        const user : User = await User.findByPk(loginRequest.name) as User;
        if(user.password !== loginRequest.password){
            var loginResponse : LoginResponse = {message:"Password incorrect"};
            return res.status(403).json(loginResponse);
        } else {
            return res.status(200).json(user);
        }
    } else {
        var loginResponse : LoginResponse = {message:"Validation failed for input data"};
        return res.status(400).json(loginResponse);
    }
})

app.listen(5023,()=>
{
    ConnectDB();
    console.log("Server listening at Port : 5023");
});