const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JARVIS Backend is running!");
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  res.json({
    reply: "नमस्ते! आपका संदेश मिला: " + message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Jarvis server running on port " + PORT);
});
