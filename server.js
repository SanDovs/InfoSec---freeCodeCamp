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

app.get('/hash/:input', async (req, res) => {
  const hash = await bcrypt.hash(req.params.input, 12);
  res.json({ hash });
});

//END_ASYNC

//START_SYNC

app.get('/compare/:input/:hash', (req, res) => {
  const result = bcrypt.compareSync(req.params.input, req.params.hash);
  res.json({ result });
});

//END_SYNC




























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
