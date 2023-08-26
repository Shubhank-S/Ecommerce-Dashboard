const express = require('express')
const app = express();
PORT= 8080;

app.get('/',(req,resp)=>{
resp.send("Server created")
})

app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`)
})