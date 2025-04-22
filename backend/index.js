const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const cdb = require('./db/Connection');
const Series = require('./db/model');
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
async function main() {
    try {
        await cdb();
        console.log('Database connection successful.');
		app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
    } catch (err) {
        console.error('Error starting the server:', err);
    }
}
main();
/* const seriesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
}, { collection: 'naruto' }); // Explicitly use 'naruto' as the collection name

const Series = mongoose.model('Series', seriesSchema); */

console.log(Series);
// API to fetch all characters
app.get('/api/series', async (req, res) => {
  try {
    const series = await Series.find({}, { name: 1, image: 1 }); // Fetch only the series name and image
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch series' });
  }
});
app.get('/api/series/:seriesName', async (req, res) => {
  const { seriesName } = req.params;
  try {
    const series = await Series.findOne({ name: seriesName }, { characters: 1 }); // Fetch only the characters field
	console.log(series);
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }
	console.log(series.characters);
    res.json(series.characters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch characters for the series' });
  }
});
/* app.get('/api/series/:seriesName/:characterName', async (req, res) => {
  const { seriesName, characterName } = req.params;
  try {
    const series = await Series.findOne(
      { name: seriesName, 'characters.name': characterName },
      { 'characters.$': 1 } // Use MongoDB's positional operator to fetch the character
    );

console.log(series);
console.log(seriesName, characterName);
    if (!series || !series.characters.length) {
      return res.status(404).json({ error: 'Character not found' });
    }

    res.json(series.characters[0].passwords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch passwords for the character' });
  }
}); */
app.get('/api/series/:seriesName/:characterName', async (req, res) => {
  const { seriesName, characterName } = req.params;
  try {
    const series = await Series.findOne({ name: seriesName });
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }

    const character = series.characters.find(
      (c) => c.name.toLowerCase() === characterName.toLowerCase()
    );
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    res.json(character.passwords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch passwords for the character' });
  }
});




