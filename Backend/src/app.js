const express=require("express")

const app=express()

app.use(express.json())    // read data from req.body

// require all the routes here
const authRouter=require("./routes/auth.routes")


//using all the routes here
app.use("/api/auth",authRouter)

module.exports=app