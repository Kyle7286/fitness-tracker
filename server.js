// Import/Require Libraries
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Define port to use
const PORT = process.env.PORT || 3000;

// Assign express to a variable for usage
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static directory
app.use(express.static("public"));

// Connect to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// Import API routes
app.use(require("./routes/api.js"));

// Front End Routes
// > Home Page | http://localhost:3000/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// > Exercise Page | http://localhost:3000/exercise
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, './public/exercise.html')));

// > Stats Page | http://localhost:3000/stats
app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, './public/stats.html')));

// Start server and actively listen for requests
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT} !`);
});

