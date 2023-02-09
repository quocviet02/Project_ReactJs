import express from 'express'
import mongoose from 'mongoose'
import morgan  from 'morgan'
import routerBlog from './routes/blog.router'
import routerUser from './routes/user.router'
import cors from 'cors'
const app = express()
mongoose.connect("mongodb://localhost:27017/asmREACTTSxNODEJS").then(()=>{console.log("kết nối thành công");})
.catch((error)=>{console.log("Kết nối thành công",error);})


app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use("/blogs",routerBlog)
app.use("/blogs",routerUser)

app.listen(8000,()=>{
    console.log("Đang chạy trên cổng 8000")
})

