const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const chatRoute = require('./routes/chatRoute')
const messageRoute = require('./routes/messageRoute')



dotenv.config();


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const apiUser = process.env.API_USER
const apiChat = process.env.API_CHAT
const apiMessage = process.env.API_MESSAGE

app.use(apiUser, userRoute)
app.use(apiChat, chatRoute)
app.use(apiMessage, messageRoute)


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