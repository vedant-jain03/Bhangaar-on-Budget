const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../schema/user')
const router = express.Router();
const Sell = require('../schema/sellScrap')
const Donate = require('../schema/donateScrap')
router.post('/register', async(req,res)=>{
    try{
        let { name,email,password,phone,location } = req.body;
        console.log(req.body)
        if(!name || !email || !password || !phone || !location){
            return res.status(400).json({message:"Empty Fields"});
        }
        const userexist = await User.findOne({email: email});
        if(userexist){
            return res.status(401).json({message:"User Exist!"})
        }
        const newuser = await new User({name,email,password,phone,location});
        const user_registered = await newuser.save();
        if(!user_registered){
            return res.status(404).json({message: "Something Went Wrong"});
        }
        return res.status(201).json({message:"User Register Successfully!"});
    }catch(err){
        console.log(err);
    }
})

router.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user_email = await User.findOne({email:email});
        if(!user_email){
            return res.status(401).json({message:"Invalid Credentials"});
        }
        const is_pswd = await bcrypt.compare(password,user_email.password);
        if(!is_pswd){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        return res.status(200).json({message:"User Login Successfully!", user: user_email})
    }catch(err){
        console.log(err);
    }
})

router.post('/sellscrap', async(req,res)=>{
    try{
        const {url,total,location,phone,date,email} = req.body;
        const newSell = new Sell({url,total,location,phone,date,email});
        const saved = await newSell.save();
        return res.status(201).json({message: "Product in the Queue!"});
    }catch(err){
        console.log(err);
    }
})

router.get('/sold_scrap/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const allscrap = await Sell.find({email:id});
        return res.status(201).json({result: allscrap});
    }
    catch(err){
        console.log(err);
    }
})

router.post('/donate_scrap', async(req,res)=>{
    try{
        const {url,donate_to,location,phone,date,email} = req.body;
        const new_donation = await Donate({url,donate_to,location,phone,date,email});
        await new_donation.save();
        return res.status(201).json({message:"Thankyou for Donating!"})
    }
    catch(err){
        console.log(err);
    }
})

router.get('/donated_scrap/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const donated_scrap = await Donate.find({email:id});
        return res.status(201).json({result: donated_scrap});
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router