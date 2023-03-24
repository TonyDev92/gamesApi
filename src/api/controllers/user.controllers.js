const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const {generateSign} = require('../../utils/jwt');
const {validateEmail, validateEmailOnUse, validatePassword} = require('../../utils/validators');

//POST
const postLogin = async (req, res) => {
    try 
    {
        const userData = await User.findOne({ email: req.body.email})
        if(!userData){
            return res.status(404).json({message:'invalid email address'});
        }
        if(!bcrypt.compareSync(req.body.password , userData.password)){
            return res.status(404).json({message:'invalid password'});
        }
        const token = generateSign(userData._id, userData.email)
        return res.status(200).json({userData, token});
    }catch(error){
        return res.status(500).json(error)
    }
}


const postRegister = async (req, res) => {
    try 
    {
        const newUser = new User(req.body);

        if(!validateEmail(newUser.email)){
            return res.status(400).json({message: 'Invalid email.'});
        }
        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: 'Invalid password.'});
        }
        if( await validateEmailOnUse(newUser.email) > 0){
            return res.status(400).json({message: 'This email already exists.'});
        }
        
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const newEmail = await newUser.save();

        return res.status(201).json(newEmail);
  
    } 
    catch(error)
    {
        res.status(500).json(error);
    }
}


const postcheck = async (req, res) => {
    try 
    {
        res.status(200).json(req.user)
    } 
    catch(error)
    {
        res.status(500).json(error);
    }
}

module.exports = {postLogin, postcheck, postRegister};