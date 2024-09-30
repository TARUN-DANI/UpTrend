const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash("error", "you need to login First");
        return res.redirect("/");
    }
    
    try{
        let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user = await userModel.
        findOne({email:decoded.email})
        .select("-passowrd");// this means i don't want password by select -password
        req.user=user;
        next();
    }catch(error){
        req.flash("error","Something Went Wrong.");
        res.redirect("/");
    }
}