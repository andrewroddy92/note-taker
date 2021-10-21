const express = require('express');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) =>
  //Step 1: Tell the console you got the request

  //Step 2: Deconstruct the request into variables

  //Step 3: Use if statement to check that variables are there

    // Step 3A: Create a json object represent the notes

    // Step 3B: Add obj from 3B to "db" json array

    // Step 3C: Use fs to write new "db" json to db.json file (overwriting what was there)

    // Step 3D: Create response obj for client

    // Step 3E: respond to client with status code and response obj

  //Step 4: If some of the variables werent there, return error response code and obj
  
);

app.listen(PORT, () =>
  console.log(`Note taker listening at http://localhost:${PORT}`)
);