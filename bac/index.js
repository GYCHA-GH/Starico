const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '2468680',
  port: 5432,
});

app.get('/api/blogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/review', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM review ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.use('/images', express.static('public/images'));



app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  await pool.query('INSERT INTO subscribers(email) VALUES($1)', [email]);
  res.end();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
