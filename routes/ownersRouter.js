const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner');
const productModel = require('../models/product');

if (process.env.NODE_ENV === "development") {
    router.post("/create",async (req, res) => {
        let owners = await ownerModel.find();
        if(owners.length>0){
            res.status(500).
            send("you don't have permission to create new owner.");
        }
        let {fullname,email,password}=req.body
        let createdOwner = await ownerModel.create({
            fullname,
            password,
            email
        })
        res.status(201).send(createdOwner);
    });
}

router.get("/", (req, res) => {
    res.send("hey it's Working allright.");
})
router.get("/admin", (req, res) => {
    let success = req.flash("success");
    res.render("createproducts",{success});
})
router.get("/products", async (req, res) => {
    let products = await productModel.find();
    let success = req.flash("success")
    res.render("products",{products,success});
})
module.exports = router;