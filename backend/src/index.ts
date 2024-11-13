import express from "express";
import {} from './user.ts'
import cors from 'cors';
const EXPRESS_PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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