const express=require('express')
const mongoDB=require('./dbconfig');

const app=express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.use(express.json());
mongoDB();
app.get("/",(req,resp)=>{
    resp.send("working");
})

app.use('/api',require('./routes/user'))
app.use('/api',require('./routes/Displaydata'))
app.use('/api',require('./routes/OrderData'))

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});

