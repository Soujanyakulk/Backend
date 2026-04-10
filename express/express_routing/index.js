const express=require('express')
const app=express()

//routing
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to express JS</h1>")
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})