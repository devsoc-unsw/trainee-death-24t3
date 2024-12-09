import express from "express";
import {} from './user.ts'
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';
import { createCalendar } from './calendar.ts'
import { fetchOrCreateByGoogleId } from './dbInterface.ts';
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const EXPRESS_PORT = 3000;
const app = express();
const client = new OAuth2Client();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});


app.post('/register', async (req, res): Promise<any> => {
  try {
    const { credential } = req.headers;
    console.log(req.cookies);
    // console.log(req.headers.data);
    // console.log(credential);

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

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h', // EXPIRATION TIME !!!
    });
    
    // Return the user payload, send token as cookie, etc
    res
      .cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production when using HTTPS
        maxAge: 3600000, // 1 hour in milliseconds
        sameSite: "none",
      })
      .status(200)
      .json({
        message: "success",
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
      },
      })
  } catch (err) {
    console.error("error:", err);
    res.status(400).json({ error: "failed", details: err.message });
  }
});


app.post('/user/login', (req, res) => {

});

app.post('/user/logout', (req, res) => {

});

app.post('/calendar/new', async (req, res): Promise<any> => {
  try {
    const token = req.cookies.token;
    const { calendarName } = req.body;

    if (!token) {
        return res.status(401).json({ error: "missing token" });
    }
    const calendarId = await createCalendar(token, calendarName);

    if (calendarId === -1) {
        return res.status(400).json({ error: "existing calendar" });
    }

    res.status(201).json({ message: "calendar created", calendarId });
  } catch (error) {
      res.status(500).json({ error: "error" });
  }
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