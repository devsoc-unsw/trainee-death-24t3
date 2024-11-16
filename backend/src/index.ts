import express from "express";
import cors from "cors";
const {OAuth2Client} = require('google-auth-library');


const EXPRESS_PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add methods you need
  credentials: true, // If you're sending cookies or other credentials
}));

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});

app.post('/user/login', (req, res) => {
  console.log(req.body);

  const client = new OAuth2Client();
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: req.body.clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(payload);
  }
  verify().catch(console.error);
  res.sendStatus(200);
});

app.post('/user/verify', (req, res) => {
  const client = new OAuth2Client();
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: req.body.clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(payload);
  }
  verify().catch(console.error);
  res.sendStatus(200);
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