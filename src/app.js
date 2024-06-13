const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database.js');
const { loginUser, getUsers } = require('./controllers/userController.js');
const authenticateToken = require('./middleware/authToken.js');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cookieParser())

app.post('/login', loginUser)
app.get('/list', authenticateToken, getUsers)

if(connectDB()){
    app.listen(process.env.APP_PORT, () => {
        console.log(`running server on port ${process.env.APP_PORT}`)
    })
} else {
    console.log("error with database")
}
