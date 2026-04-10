const http=require('http')
const url=require('url')
const app=http.createServer((req,res)=>{
     res.writeHead(200,{'content-Type':'text/html'})
    var urldata=url.parse(req.url,true)
    console.log(urldata)
    
    if(urldata.pathname==='/'){
       
        res.write("<h1>Home Page</h1>")
    }
    else if(urldata.pathname==='/about'){
       
        res.write("<h1>About Us</h1>")
    }
     else if(urldata.pathname==='/contact'){
        
        res.write("<h1>Contact Us</h1>")
    }
     else {
        
        res.write("<h1>404 Page Not Found</h1>")
    }
    res.end()
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`Server is up on http://${HOST}:${PORT}`)
})