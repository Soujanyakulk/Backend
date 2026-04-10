const http=require('http')
const app=http.createServer((request,response)=>{

    response.write("Hello Welcome To The Node JS Server")
    response.end()

})
const PORT=3000;
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server Is running on http://${HOST}:${PORT}`)
})


