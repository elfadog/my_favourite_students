require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const loginRoutes = require('./Routes/loginRoute');

const app = express();

const MONGO_URI = process.env.MONGO_URI || "fallbackURI";

// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://samuelcathro:VWr32%40%29%21%5E%21%21@myfavouritestudents.ghugjzv.mongodb.net/manageMe?retryWrites=true&w=majority"; // Use environment variable or a fallback

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

//Schema for retrieving Jobs from the database
const jobSchema = new mongoose.Schema({
  invoiceNo: String,
  // Add other fields as necessary
});
const Job = mongoose.model("Job", jobSchema, "jobs");

const User = mongoose.model("User", UserSchema, "Users");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// app.use('/api', loginRoutes);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ username });
        
        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, error: 'Invalid username or password' });
        }
        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, "0.0.0.0", () =>
  console.log("Server is running on port 3001")
);
