const express = require('express')

const app = express()
app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render("index", {text: "world"})
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})