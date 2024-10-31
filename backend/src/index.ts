import express from "express";

const EXPRESS_PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});

app.post('/user/register', (req, res) => {

})

app.post('/user/login', (req, res) => {

})

app.post('/user/logout', (req, res) => {

})

app.post('/calendar', (req, res) => {

})

app.get('/calendar/:calendarId', (req, res) => {

})

app.post('/calendar/join/:calendarId', (req, res) => {

})

app.listen(EXPRESS_PORT, () => {
  console.log(
    `🤝📆 cotangles backend listening on port ${EXPRESS_PORT} 📆🤝`
  );
});