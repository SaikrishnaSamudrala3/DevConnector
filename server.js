const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
if (!process.env.VERCEL) {
  connectDB();
}

// Init Middleware
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/health', async (req, res) => {
  try {
    await connectDB();
    res.json({
      ok: true,
      database: 'connected',
      mongoUriConfigured: Boolean(process.env.MONGO_URI),
      jwtSecretConfigured: Boolean(process.env.JWT_SECRET)
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      database: 'disconnected',
      mongoUriConfigured: Boolean(process.env.MONGO_URI),
      jwtSecretConfigured: Boolean(process.env.JWT_SECRET),
      error: err.message
    });
  }
});

app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({
      errors: [{ msg: 'Database connection failed' }],
      detail: process.env.NODE_ENV === 'production' ? undefined : err.message
    });
  }
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5001;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
