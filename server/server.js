const express = require("express")
const app = express();
const PORT = 8080;

app.get('/',(req,resp)=>{
resp.send('Server Started')
})

app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})