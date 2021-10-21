const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) =>{

    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (title && text) {    

        const newNote = {
            title,
            text,
        };

        db.push(newNote);
        const noteString = JSON.stringify(db);

        fs.writeFile('./db/db.json', noteString,(err) =>
        err
          ? console.error(err)
          : console.log(
              `New Note has been saved!`
            )
        )

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('error in saving Note');
  }


});

app.listen(PORT, () =>
  console.log(`Note taker listening at http://localhost:${PORT}`)
);