const router = require("express").Router();
const { User, Thought } = require("../../models");

router.get("/getThoughts", (req,res)=>{
    console.log(req.body);
    console.log(res);
})
