const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API: Checkout (demo - no real payment)
app.post('/api/checkout', (req, res) => {
  const { game, packageId, userId, zoneId } = req.body;

  if (!game || !packageId || !userId) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: game, packageId, userId',
    });
  }

  if (game === 'mobile-legends' && !zoneId) {
    return res.status(400).json({
      success: false,
      error: 'zoneId is required for Mobile Legends',
    });
  }

  const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  res.json({
    success: true,
    message: 'Top-up successful!',
    orderId,
    order: { game, packageId, userId, zoneId },
  });
});

// Serve static files from React build
const clientDist = path.join(__dirname, 'client', 'dist');
app.use(express.static(clientDist));

// SPA fallback: serve index.html for client-side routing (Express 5: use middleware, not app.get('*'))
app.use((req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
