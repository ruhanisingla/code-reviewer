require('dotenv').config();
const app = require('./src/app.js');

// srtart server
app.listen(3000, () => { 
    console.log('Server is running on http://localhost:3000')
})