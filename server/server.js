const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// In-memory data
let events = [
  {
    id: 1,
    title: "Web Dev Workshop",
    date: "Oct 24, 2026",
    description: "Learn modern HTML & CSS responsive design basics."
  },
  {
    id: 2,
    title: "Gaming Night",
    date: "Oct 28, 2026",
    description: "Esports tournaments and multiplayer party games."
  },
  {
    id: 3,
    title: "Career & Internship Talk",
    date: "Nov 02, 2026",
    description: "Insights on agile software methodologies and tech roles."
  },
  {
    id: 4,
    title: "AI & Cloud Meetup",
    date: "Nov 06, 2026",
    description: "Hands-on session with cloud deployments and web APIs."
  }
];

// GET all events
app.get("/api/events", (req, res) => {
  res.json(events);
});

// GET single event by ID
app.get("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json(event);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});