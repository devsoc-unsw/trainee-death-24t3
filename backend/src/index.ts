import express from "express";
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';
import { fetchOrCreateByGoogleId } from './dbInterface.ts';
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserToken } from "./types.ts";
import { verifySessionToken } from "./utils.ts";
import { createCalendar, inviteCalendar, calendarList, removeUserFromCalendar, updateUser, calendarInfo } from "./calendar.ts";


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
    return res
      .cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production when using HTTPS
        maxAge: 3600000, // 1 hour in milliseconds
        sameSite: "lax", // KEEP THIS AS LAX DO NOT CHANGE TO NONE OR CHROME WILL FUCK YOU OVER
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
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.put('/user/update', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }

  const { userId, name, ical } = req.body;
  if (tokenDecoded.userId !== userId) {
    return res.status(403).json({ 
      error: "Unauthorized request" 
    });
  }

  try {
    await updateUser(userId, { name, ical });
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.post('/user/logout', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.clearCookie('token').status(200).json({ 
      message: "User already logged out" 
    });
  }

  const { userId } = req.body;
  if (tokenDecoded.userId != userId) {
    return res.status(403).json({ 
      error: "Unauthorized request" 
    });
  }

  return res
    .clearCookie('token')
    .status(200)
    .json({ message: "success"});
});

app.post('/calendar/new', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }
  try {
    const { calendarName } = req.body;
    const calendarId = await createCalendar(tokenDecoded.userId, calendarName);
    return res.status(200).json({ message: "success", calendarId: calendarId });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.post('/calendar/invite', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }

  try {
    const { inviteEmail, calendarId } = req.body;
    // returns calendarId if successful
    const ret = await inviteCalendar(inviteEmail, tokenDecoded.userId, calendarId);
    return res.status(200).json({ message: "success", calendarId: calendarId });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.get('/calendar/list/:userId', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }
  try {
    const userId = req.params.userId;
    const calendarNames = await calendarList(userId);
    return res.status(200).json({ message: "success", calendarNames });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});


app.get('/calendar/info/:calendarId', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }
  try {
    const calendarId = req.params.calendarId;
    const calendarInfos = await calendarInfo(calendarId);
    return res.status(200).json({ message: "success", calendarInfos });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.put('/calendar/accept', (req, res) => {

});

app.put('/calendar/reject', (req, res) => {

});

app.delete('/calendar/remove', async (req, res): Promise<any> => {
  const tokenDecoded: UserToken = verifySessionToken(req.cookies.token);
  if (tokenDecoded == null) {
    return res.status(403).json({
      error: "Unauthorized request"
    })
  }

  try {
    const { calendarId, deleteUserId } = req.body;
    await removeUserFromCalendar(calendarId, deleteUserId);
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.error("error:", err);
    return res.status(400).json({ error: "failed", details: err.message });
  }
});

app.listen(EXPRESS_PORT, () => {
  console.log(
    `🤝📆 cotangles backend listening on port ${EXPRESS_PORT} 📆🤝`
  );
});