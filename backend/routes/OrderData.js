const express=require("express");

const router=express.Router();

const Order=require("../models/OrderSchema")

router.post('/orderData',async (req,resp)=>{
    let data=req.body.order_data
    await data.splice(0,0,{order_date:req.body.order_date})

    let eId= await Order.findOne({"email":req.body.email})
    console.log(eId)
    if(eId===0){
        try {
            await order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                resp.json({success:true})
            })
        } catch (error) {
            console.log(error.message)
            resp.send("Server Error",error.message)
        }
    }
    else{
        try {
           await Order.findOneAndUpdate({email:req.body.email},
            {$push:{order_data:data}}).then(()=>{
                resp.json({success:true})
            }) 
        } catch (error) {
          resp.send("Server Error",error.message)  
        }
    }
})

router.post('/myorder',async(req,resp)=>{
try {
    let mydata= await Orders.findOne({"email":req.body.email})
    resp.json({orderData:mydata})
} catch (error) {
    resp.send("Server Error",error.message) 
}
})

module.exports=router;