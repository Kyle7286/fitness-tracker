const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public dir
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Exercise Page | http://localhost:3000/exercise
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, './public/exercise.html')));

// Stats Page | http://localhost:3000/stats
app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, './public/stats.html')));


app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});

