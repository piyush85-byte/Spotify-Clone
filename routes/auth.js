const express=require("express")

const router=express.Router()



router.post("/signin",async(req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(404).json("An error occured try again")
    }
})















module.exports=router