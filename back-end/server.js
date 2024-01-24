const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 7132;

const dataFilePath = path.join(__dirname, "comments.json");

app.use(bodyParser.json());
app.use(cors());

// Middleware to allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Endpoint to edit a comment by index
app.put("/api/comments/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index)) {
    return res.status(400).json({ error: "Invalid index format" });
  }

  const { comment } = req.body;
  if (!comment || typeof comment !== "string") {
    return res.status(400).json({ error: "Invalid comment format" });
  }

  try {
    const comments = getComments();
    if (index >= 0 && index < comments.length) {
      comments[index].text = comment;
      comments[index].dateTime = new Date();
      saveComments(comments);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    console.error("Error editing comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get comments
app.get("/api/comments", (req, res) => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    const comments = JSON.parse(data).comments || [];
    res.json({ comments });
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to add a comment
app.post("/api/comments", (req, res) => {
  const { name, comment } = req.body;
  if (
    !name ||
    typeof name !== "string" ||
    !comment ||
    typeof comment !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  try {
    const comments = getComments();
    comments.push({ name, text: comment, dateTime: new Date() });
    saveComments(comments);
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to delete a comment by index
app.delete("/api/comments/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index)) {
    return res.status(400).json({ error: "Invalid index format" });
  }

  try {
    const comments = getComments();
    if (index >= 0 && index < comments.length) {
      comments.splice(index, 1);
      saveComments(comments);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getComments() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data).comments || [];
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

function saveComments(comments) {
  try {
    const data = JSON.stringify({ comments });
    fs.writeFileSync(dataFilePath, data, "utf-8");
    console.log("Comments saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}
