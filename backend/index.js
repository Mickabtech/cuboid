const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const signupRouter = require('./routes/signup.routes.js')
const userLogin = require('./routes/login.routes.js')
const userProf = require('./routes/profile.routes.js')



dotenv.config();


const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use('/uploads', express.static('uploads'));
app.use('/api/auth/signup', signupRouter)
app.use('/api/auth/login', userLogin)
app.use('/api/user/profile', userProf)

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