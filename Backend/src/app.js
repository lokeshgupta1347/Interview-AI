const express=require("express")

const app=express()

const cookieParser=require("cookie-parser")

const cors=require("cors")


// Skip JSON parsing for multipart/form-data (multer handles those)
app.use((req, res, next) => {
    if (req.headers["content-type"]?.startsWith("multipart/form-data")) {
        return next()
    }
    express.json()(req, res, next)
})

app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

// require all the routes here
const authRouter=require("./routes/auth.routes")
const interviewRouter=require("./routes/interview.routes")


//using all the routes here
app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)

module.exports=app