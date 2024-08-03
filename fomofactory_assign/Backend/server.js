// 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const DataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

const DataModel = mongoose.model('Data', DataSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch data from LiveCoinWatch
app.get('/api/livecoinwatch/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const apiKey = '0beda87c-677f-4ab0-a78f-022f2a365ba6'; // Replace with your LiveCoinWatch API key
  const url = `https://api.livecoinwatch.com/coins/list`;

  try {
    const response = await axios.post(
      url,
      {
        currency: 'USD',
        code: symbol,
        meta: true,
      },
      {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
