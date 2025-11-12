const express = require('express');
const cookieParser = require('cookie-parser');
const cors=require('cors');




const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true // Allow cookies to be sent   
}));
// Import user routes
const userRoutes = require('./src/router/user.route');
const authRoutes = require('./src/router/post.router');

app.use('/api/users', userRoutes);

app.use("/api/post",authRoutes)

module.exports = app;