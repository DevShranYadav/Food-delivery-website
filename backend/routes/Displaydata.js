const express=require('express')
const router = express.Router();

router.post('/foodData',(req,resp)=>{
    try {
        resp.send([global.food_items,global.foodCategory])
        console.log(global.food_items)
    } catch (error) {
        console.error(error.message);
    }

})
module.exports = router;