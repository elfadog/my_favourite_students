const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb')
.then(
    () => { 
      console.log("Connected");
    },
    err => {
      console.log(err); 
    }
);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', UserSchema, 'mydb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

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
});

app.listen(3001, () => console.log('Server is running on port 3001'));
