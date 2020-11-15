const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.post('/add',(req,res)=>{
    const num1= req.body.num1
    const num2= req.body.num2

    if(typeof num1!=='number' || typeof num2!=='number') {
        res.send({status: "error", message: "Invalid data types", sum: 0});
        return;
    }
    else if(num1>1000000 || num2>1000000 || num1+num2>1000000){
        res.send({status:"error",message:"Overflow",sum:0});
        return ;
    }
    else if(num1<-1000000 || num2<-1000000 || num1+num2<-1000000){
        res.send({status:"error",message:"Underflow",sum:0});
        return ;
    }
    res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: num1+num2
    });
})

app.post('/sub',(req,res)=>{
    const num1= req.body.num1
    const num2= req.body.num2

    if(typeof num1!=='number' || typeof num2!=='number') {
        res.send({status: "error", message: "Invalid data types", difference: 0});
        return;
    }
    else if(num1>1000000 || num2>1000000){
        res.send({status:"error",message:"Overflow",difference:0});
        return ;
    }
    else if(num1<-1000000 || num2<-1000000){
        res.send({status:"error",message:"Underflow",difference:0});
        return ;
    }
    res.send({
        status: "success",
        message: "the difference of given two numbers",
        difference: num1-num2
    });
})

app.post('/multiply',(req,res)=>{
    const num1= req.body.num1
    const num2= req.body.num2

    if(typeof num1!=='number' || typeof num2!=='number') {
        res.send({status: "error", message: "Invalid data types", result: 0});
        return;
    }
    else if(num1>1000000 || num2>1000000 || num1*num2>1000000){
        res.send({status:"error",message:"Overflow",result:0});
        return ;
    }
    else if(num1<-1000000 || num2<-1000000 || num1*num2<-1000000){
        res.send({status:"error",message:"Underflow",result:0});
        return ;
    }
    res.send({
        status: "success",
        message: "The product of two numbers",
        result: num1*num2
    });
})

app.post('/divide',(req,res)=>{
    const num1= req.body.num1
    const num2= req.body.num2

    if(typeof num1!=='number' || typeof num2!=='number') {
        res.send({status: "error", message: "Invalid data types", result: 0});
        return;
    }
    else if(num1>1000000 || num2>1000000){
        res.send({status:"error",message:"Overflow",result:0});
        return ;
    }
    else if(num1<-1000000 || num2<-1000000){
        res.send({status:"error",message:"Underflow",result:0});
        return ;
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