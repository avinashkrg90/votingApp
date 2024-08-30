const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("Hi, welcome to my server!!")
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})