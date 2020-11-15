const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
const Joi= require("joi");
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

const schema= Joi.object({
    num1: Joi.number().min(-1000000).max(1000000),
    num2: Joi.number().min(-1000000).max(1000000)
});

app.post('/add',(req,res)=>{
    const validateNumbers= schema.validate(req.body);
    // console.log(validateNumbers.error.details[0].message);
    const num1= req.body.num1
    const num2= req.body.num2

    if(validateNumbers.error){
        const errmessage= validateNumbers.error.details[0].message;
        if(errmessage.includes("must be a number")) {
            res.send({status: "error", message: "Invalid data types", sum: 0});
            return;
        }
        else if(errmessage.includes("must be less than or equal to 1000000")){
            res.send({status:"error",message:"Overflow",sum:0});
            return ;
        }
        else if(errmessage.includes("must be greater than or equal to -1000000")){
            res.send({status:"error",message:"Underflow",sum:0});
            return ;
        }
    }
    res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: num1+num2
    });
})

app.post('/sub',(req,res)=>{
    const validateNumbers= schema.validate(req.body);
    // console.log(validateNumbers.error.details[0].message);
    const num1= req.body.num1
    const num2= req.body.num2

    if(validateNumbers.error){
        const errmessage= validateNumbers.error.details[0].message;
        if(errmessage.includes("must be a number")) {
            res.send({status: "error", message: "Invalid data types", difference: 0});
            return;
        }
        else if(errmessage.includes("must be less than or equal to 1000000")){
            res.send({status:"error",message:"Overflow",difference:0});
            return ;
        }
        else if(errmessage.includes("must be greater than or equal to -1000000")){
            res.send({status:"error",message:"Underflow",difference:0});
            return ;
        }
    }
    res.send({
        status: "success",
        message: "the difference of given two numbers",
        difference: num1-num2
    });
})

app.post('/multiply',(req,res)=>{
    const validateNumbers= schema.validate(req.body);
    // console.log(validateNumbers.error.details[0].message);
    const num1= req.body.num1
    const num2= req.body.num2

    if(validateNumbers.error){
        const errmessage= validateNumbers.error.details[0].message;
        if(errmessage.includes("must be a number")) {
            res.send({status: "error", message: "Invalid data types", result: 0});
            return;
        }
        else if(errmessage.includes("must be less than or equal to 1000000")){
            res.send({status:"error",message:"Overflow",result:0});
            return ;
        }
        else if(errmessage.includes("must be greater than or equal to -1000000")){
            res.send({status:"error",message:"Underflow",result:0});
            return ;
        }
    }
    res.send({
        status: "success",
        message: "The product of two numbers",
        result: num1*num2
    });
})

app.post('/divide',(req,res)=>{
    const validateNumbers= schema.validate(req.body);
    // console.log(validateNumbers.error.details[0].message);
    const num1= req.body.num1
    const num2= req.body.num2

    if(validateNumbers.error){
        const errmessage= validateNumbers.error.details[0].message;
        if(errmessage.includes("must be a number")) {
            res.send({status: "error", message: "Invalid data types", result: 0});
            return;
        }
        else if(errmessage.includes("must be less than or equal to 1000000")){
            res.send({status:"error",message:"Overflow",result:0});
            return ;
        }
        else if(errmessage.includes("must be greater than or equal to -1000000")){
            res.send({status:"error",message:"Underflow",result:0});
            return ;
        }
    }
    if(num2===0){
        res.send({status:"error",message:"Cannot divide by zero",result:0});
        return;
    }
    res.send({
        status: "success",
        message: "The division of two numbers",
        result: num1/num2
    });
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;