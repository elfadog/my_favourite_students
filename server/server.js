const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema and model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username }); // Corrected to userName
    if (!user || user.passWord !== password) { // Corrected to passWord and compared directly to the input password
      return res.status(401).send('Invalid username or password');
    }
    
    res.send('Login successful');
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Server error');
  }
});

app.listen(3001, () => console.log('Server is running on port 3001'));
