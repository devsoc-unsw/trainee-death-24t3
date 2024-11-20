import express from "express";
import { registerUserId } from './user.ts'

const EXPRESS_PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('cotangles backend says hello');
});

app.post('/register', async (req, res) => {
  const { username, password, ical } = req.body;
    try {
        const result = await registerUserId(username, password, ical);

        if (result) {
            res.status(201).json({message: "register success",});
        } else {
            res.status(400).json({message: "register fail"});
        }
    } catch (error) {
        res.status(500).json({message: "server error",});
    }
})

app.listen(EXPRESS_PORT, () => {
  console.log(
    `🤝📆 cotangles backend listening on port ${EXPRESS_PORT} 📆🤝`
  );
});