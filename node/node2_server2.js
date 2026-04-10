const http=require('http')
const app=http.createServer((req,res)=>{

    res.write("<h1>Welcome To Node JS Server</h1>")

    for(let i=0;i<1000;i++)
    {

        
        res.write(`<div style='height:${i}px;width:${i}px;background-color:pink;float:left;margin:10px'></div>`)

    }

    res.end()

})

const PORT=2000;
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http:${HOST}:${PORT}`)
})