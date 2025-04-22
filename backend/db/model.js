const mongoose = require('mongoose');

// Define the schema for the nested JSON structure
const seriesSchema = new mongoose.Schema({
  name: String, // Series name, e.g., "Naruto"
  image: String, // Series image URL
  characters: [
    {
      name: String, // Character name, e.g., "Naruto Uzumaki"
      image: String, // Character image URL
      passwords: [
        {
          sno: { type: Number, required: true },
          value: { type: String, required: true },
        },
      ],
    },
  ],
}, { collection: 'series' }); // Explicitly use 'series' as the collection name

// Create the model
const Series = mongoose.model('Series', seriesSchema);

// Export the model
module.exports = Series;
