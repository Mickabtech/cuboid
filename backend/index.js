const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const signupRouter = require('./routes/signup.routes.js')
const userLogin = require('./routes/login.routes.js')
const userProf = require('./routes/profile.routes.js')
const chatRoute = require('./routes/chat.routes.js')
const messageRoute = require('./routes/message.routes.js')

const path = require('path');



dotenv.config();


const app = express();
app.use(cors());

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({extended: false}));
app.use('/api/auth/signup', signupRouter)
app.use('/api/auth/login', userLogin)
app.use('/api/user/profile', userProf)
app.use('/api/chats', chatRoute)
app.use('/api/messages', messageRoute)

const port = process.env.PORT || 4000;
const mongoURL = process.env.MONGODB_URI

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error(error, 'Error connecting to MongoDB:');
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});