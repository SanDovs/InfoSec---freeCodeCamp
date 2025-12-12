'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
// const fccTesting  = require('freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello');
});
//fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
