const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")



const app=express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())








app.listen(5500,()=>console.log("Server started on port 5500"))