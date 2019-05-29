const express = require("express");
let router = express.Router();
let user = require("../models/user.models");

router.post("./login", (req, res)=>{
    user.login(req, res);
})

router.post("./signup", (req, res)=>{
    user.create(req, res);
})


module.exports = router;