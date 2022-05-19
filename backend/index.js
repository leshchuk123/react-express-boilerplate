const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { lorem } = require('faker');

const app = express();
const port = 5010;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Express server run on port ${5010}! Everything is good!`);
});

app.get('/articles', (req, res) => {
  // fake data, must be replaced by real data request
  let data = [
    {
      id: 0,
      title: "How it all came about",
      description: "An article about how this template was created",
      body: lorem.paragraphs(5)
    }
  ];
  res.json({ items: data });
});


app.listen(port, () => console.log(`Listening http://localhost:${port}!`));