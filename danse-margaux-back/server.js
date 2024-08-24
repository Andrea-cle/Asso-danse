import express from "express";
const app = express();
const PORT = 3000;

// Route
app.get("/api", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
