import {ConnectDB} from './database/db';
import express from 'express';
import { SignUpRequest,SignUpResponse,LoginRequest,LoginResponse, AddDocRequest, AddDocResponse, GetDocRequest, GetDocResponse, EditDocRequest, EditDocResponse, GetDocsResponse} from './types/type';
import { ValidateDoc, ValidatePassword, ValidateSignUpRequest } from './validate/validator';
import User from './models/User';
import Doc from './models/Doc';


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
        const user : User = await User.findByPk(signUpRequest.name) as User;
        if(user!=null){
            var signUpResponse : SignUpResponse = {message:"User with this name already Exists!"};
            return res.status(400).json(signUpResponse);
        }
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
    var signUpResponse : SignUpResponse = {message:"Validation failed for Input data!"};
    return res.status(400).json(signUpResponse);
});

app.post("/login",async (req,res,next)=>
{
    const loginRequest = req.body as LoginRequest;
    console.log(loginRequest.name+" and "+loginRequest.password);
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
});

app.post("/addDoc",async (req,res,next)=>{
    const addDocRequest = req.body as AddDocRequest;
    const validatorResponse : boolean = ValidateDoc(addDocRequest.name);
    if(validatorResponse){
        try {
            await Doc.create({name:addDocRequest.name,userName:addDocRequest.userName,docData:addDocRequest.docData});
            var addDocResponse : AddDocResponse = {message:"Added Doc"};
            return res.status(200).json(addDocResponse);
        }
        catch(e){
            console.log(e);
            var addDocResponse : AddDocResponse = {message:"Error in Adding Doc to Database"};
            return res.status(500).json(addDocResponse);
        }
    }else {
        var addDocResponse : AddDocResponse = {message:"Validation failed for Data!"};
        return res.status(400).json(addDocResponse);

    }
});

app.get("/editDoc",async (req,res,next)=>{
    const editDocRequest = req.body  as EditDocRequest;
    const validatorResponse : boolean = ValidateDoc(editDocRequest.name);
    if(validatorResponse){
        try{
            await Doc.update({ docData: editDocRequest.docData },{ where: {name : editDocRequest.name}, returning: true });
            var editDocResponse : EditDocResponse = {message : "Successfully Updated!"};
            return res.status(200).json(editDocResponse);
        }
        catch(e){
            var editDocResponse : EditDocResponse = {message:"Error in updating DB!"};
            return res.status(400).json(editDocResponse);
        }
    } else {
        var editDocResponse : EditDocResponse = {message:"Validation Error!"};
        return res.status(200).json(editDocResponse);
    }
});

app.get("/getDoc",async (req,res,next)=>{
    const getDocRequest = req.body as GetDocRequest;
    const validatorResponse : boolean = ValidateDoc(getDocRequest.name);
    if(validatorResponse){
        try
        {
            var doc: Doc  = await Doc.findByPk(getDocRequest.name) as Doc;
            var getDocResponse : GetDocResponse ={docData:Buffer.from(doc.docData).toString('ascii'),message:"Recieved Information"};
            return res.status(200).json(getDocResponse);
        }
        catch(e){
            var getDocResponse : GetDocResponse = {docData:"",message:"Error in Getting Doc from the database"};
            return res.status(400).json(getDocResponse);
        }
    }else {
        var getDocResponse : GetDocResponse = {docData:"",message:"Validation of data failed"};
        return res.status(400).json(getDocResponse);
    }
});


app.get("/getDocs",async (req,res,next)=>{
    var docs : Doc[] = await Doc.findAll();
    var getDocsResponse : GetDocsResponse = {docs : docs};
    return res.status(200).json(getDocsResponse);
})


app.listen(5023,()=>
{
    ConnectDB();
    console.log("Server listening at Port : 5023");
});