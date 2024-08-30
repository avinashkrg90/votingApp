const express = require('express')

const app = express()
const db = require('./db');
app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000

require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body


// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})