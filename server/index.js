require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const membersRouter = require('./routes/members');
app.use('/members', membersRouter);

app.listen(port, () => console.log('Server Started'));
