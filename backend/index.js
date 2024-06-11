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

app.use('/api/users', userRoute)
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