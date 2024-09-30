const bcrypt = require('bcrypt');
require('cookie-parser');
require('jsonwebtoken');
const {validatePassword}=require('../utils/passwordValidator');

const {generateToken}=require("../utils/generateToken");
const userModel = require('../models/user');
module.exports.registerUser = async function(req, res){
    try {
        //joy is a  package and we can perform a joy bassed check to handle if user misses anything 
        // so his account not be created.
        let { email, fullname, password } = req.body;
        const result = validatePassword(password);
        if(result!=="Password is strong."){
            req.flash("error",result);
            return res.redirect("/");
        }
        let user = await userModel.findOne({ email });
        if(user){
            req.flash("error","user already registered please login");
            return res.redirect("/");

        }
        bcrypt.genSalt(10,function(error,salt){
            if (error) {
                req.flash('error', error.message);
                return res.redirect('/');  // Redirect to home
            }
            bcrypt.hash(password,salt,async function(error,hash){
                if(error){
                    req.flash('error', error.message);
                    return res.redirect('/');
                }
                else{
                   let createdUser = await userModel.create({
                       email,
                       fullname,
                       password:hash
                   });
                   let token = generateToken(createdUser);
                   res.cookie("token",token);
                   return res.redirect("/home")
                }
            })
        })
        // res.status(201).send(createdUser);
    }catch (error) {
        req.flash('error', error.message);
        return res.redirect('/');
    }
}
module.exports.loginUser= async function(req,res){
    let {email,password}=req.body;
    let user = await userModel.findOne({email});
    if(!user){
        req.flash( "error","Email or Password is incorrect");
        return res.redirect("/");
    }
    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            return res.redirect("/home");
        }
        else{
            req.flash("error","Email or Password is incorrect");
            return res.redirect("/");
        }
    })
}
module.exports.logout=function(req,res){
    res.cookie("token","");
    res.redirect("/");
};