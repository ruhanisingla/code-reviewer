// require express
const express = require('express');
const aiRoutes = require('./routes/ai.routes')
// creates express applicationa nd a server is created and store in server
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World!!')
})

app.use('/ai', aiRoutes)

// export it so that it can be now used in other files
module.exports = app;