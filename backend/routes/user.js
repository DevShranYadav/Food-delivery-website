const express = require('express');

const router = express.Router();

const User = require('../models/User')
const { body, validationResult } = require('express-validator')

router.post('/user', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),
],
    async (req, resp) => {

        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return resp.status(400).json({errors:errors.array()});
        }
        try {
            User.create({
                name: req.body.name,
                password: req.body.password,
                location: req.body.location,
                email: req.body.email
            })
            resp.json({ success: true })

        } catch (error) {
            console.log(error)
            resp.json({ success: false })
        }
    })

    router.post('/login', [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ],
        async (req, resp) => {
            let email= req.body.email;
            const errors=validationResult(req);
        if(!errors.isEmpty()){
            return resp.status(400).json({errors:errors.array()});
        }
           try {
               const userData=await User.findOne({email})
                if(!userData){
                    return resp.status(400).json("Try login to correct details");
                }
                if(req.body.password !== userData.password){
                    return resp.status(400).json("Try login to correct details");
                }
                return resp.json({ success: true });
    
            } catch (error) {
                console.log(error)
                resp.json({ success: false })
            }
        })

module.exports = router;