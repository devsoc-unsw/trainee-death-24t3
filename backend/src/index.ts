import express from "express";
import { Request, Response } from 'express';
import {} from './user.ts'
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';
import { fetchOrCreateByGoogleId, deserializeUserById } from './dbInterface.ts';
import { User } from './types.ts';

const EXPRESS_PORT = 3000;
const app = express();
const client = new OAuth2Client();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
connectDatabase();

app.use(cors())

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});


app.post('/register', async (req, res): Promise<any> => {
  try {
    const { credential } = req.headers;
    console.log(req.headers);
    console.log(credential);

    if (!credential) {
      return res.status(400).json({ error: "no id" });
    }
    if (typeof credential !== "string") {
      return res.status(400).json({ error: "no id" });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ error: "no payload" });
    }

    const { email, sub: googleId } = payload;

    // Fetch or create the user using Google ID
    const user = await fetchOrCreateByGoogleId(googleId, email);

    if (!user) {
      return res.status(500).json({ error: "no user" });
    }

    // Return the user payload or relevant response
    res.status(200).json({
      message: "success",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("error:", err);
    res.status(400).json({ error: "failed", details: err.message });
  }

});


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