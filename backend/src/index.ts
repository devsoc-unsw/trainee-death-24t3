import express from "express";
import {} from './user.ts'
import cors from 'cors';

const { OAuth2Client } = require('google-auth-library');
import jwt from 'jsonwebtoken';
const mongoose = require('mongoose');
import cookieParser from 'cookie-parser';
const connectDatabase = require("./dbConfig.js");

const EXPRESS_PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
connectDatabase();

app.use(cors())

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});


app.post('/register', (req, res) => {
  const token = req.body.credential;
  console.log(token);
  // Process the token (e.g., verify and register user)
  if (token) {
    // Registration logic here, then respond
    res.json({ message: "User registered successfully" });
  } else {
    res.status(400).json({ error: "Token not provided" });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h', // EXPIRATION TIME POOKIE!!!
  });

  res
    .status(200)
    .cookie('token', token, {
      httpOnly: true,
      secure: false, // PRODUCTION: set to true when using HTTPS
      maxAge: 3600000, // 1h
      sameSite: 'lax',
    })
    .json({ message: 'Authentication successful', user });
})

app.post('/user/login', (req, res) => {

});

app.post('/user/logout', (req, res) => {

});

app.post('/calendar', (req, res) => {

});

app.get('/calendar/:calendarId', (req, res) => {

});

app.post('/calendar/join/:calendarId', (req, res) => {

});

app.listen(EXPRESS_PORT, () => {
  console.log(
    `🤝📆 cotangles backend listening on port ${EXPRESS_PORT} 📆🤝`
  );
});