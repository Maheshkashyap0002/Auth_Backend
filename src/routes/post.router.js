const express = require('express')
const jwt = require("jsonwebtoken");
const userModel = require('../model/user.model');
const router = express.Router();



router.post('/create' ,async (req , res) => {

  const token = req.cookies.token;

  if(!token){
    return res.status(404).json({
      message: "Unauthorised"
    })
  }

  try{
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    console.log(decoded)
    const user = await userModel.findOne({
      _id: decoded.id
    })
    console.log(user)
  } 
  catch(err){
   return res.status(404).json({
      message: "Token invaild",
    })
  }

  res.send("Post created successfully");
})




module.exports = router;