const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')



async function registerUser(req , res){

  const { username , email , password} = req.body ;

  const user = await userModel.create({
    username, email, password
  })

  const isUserAlreadyExits = await userModel.findOne({
    email
  })

  if(!isUserAlreadyExits){
  return res.status(409).json({
      message: "User Already exits"
    })
  }

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.cookie("token",token)

  res.status(201).json({
    message: "User register successfully",
    user
  })

}

module.exports = { registerUser }