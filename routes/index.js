const express = require('express');
const router = express.Router();
const isloggedIn = require('../middlewares/isloggedIn');
const profileUpload= require('../config/mul-config');
const productModel = require('../models/product');
const userModel = require('../models/user');

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error,loggedin:false});
});
router.get("/signup",function(req,res){
    let error = req.flash("error");
    res.render("signup",{error,loggedin:false});
});

router.get("/shop",isloggedIn,async function(req,res){
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop",{products,success});
});
router.get("/account",isloggedIn,async function(req,res){
    let user = await userModel.findOne({email:req.user.email});
    let error = req.flash("error");
    res.render("myAccount",{error,user});
});
router.post('/uploadprofile',isloggedIn,profileUpload.single("image"), async (req, res) => {
    let user = await userModel.findOneAndUpdate({email:req.user.email});
    user.image=req.file.filename;
    await user.save();
    res.redirect('home');
})
router.post('/update',isloggedIn, async (req, res) => {
    let {fullname,age,contact}=req.body;
    const update = {fullname,age,contact};
    if(req.contact<10){
        req.flash("error","contact number length is <10");
        res.redirect("/uploadprofile");
    }
    let user = await userModel.findOneAndUpdate({email:req.user.email},update);
    await user.save();
    res.redirect('home');
})
router.get("/home",async function(req,res){
    let products = await productModel.find();
    res.render("home",{products});
});
router.get("/cart",isloggedIn,async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    .populate("cart");
    if(user.cart.length>0) {
        const count = {};
        let i=0;
        user.cart.forEach(function(cart) {
            count[cart] = (count[cart]||0)+1;
        });
        const uniqueCart = [...new Set(user.cart)];
        const bill=[];
        uniqueCart.forEach(function(cart) {
             bill[i] =((cart.price-cart.discount)*count[cart])+50;
             i++;
            });
            res.render("cart",{user,bill});
    }else{
    res.render("cart",{user});
    }
});
router.get("/addtocart/:productid",isloggedIn,async function(req,res){
    let user= await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success","Added to Cart");
    res.redirect("/shop");
});
router.get("/delete/:productid", isloggedIn, async function(req, res) {
    try {
        await productModel.findOneAndDelete({_id: req.params.productid});
        req.flash("success", "Product Deleted Successfully");
    } catch (err) {
        req.flash("error", "Failed to delete product");
        console.error("Error deleting product:", err);
    }
    res.redirect('/owners/products');
});

module.exports=router;