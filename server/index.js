const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const vacationPlaces = [];

app.get('/api/places', (req, res) => {
  res.json(vacationPlaces);
});

app.post('/api/places', (req, res) => {
  const newPlace = req.body;
  vacationPlaces.push(newPlace);
  res.json(newPlace);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

