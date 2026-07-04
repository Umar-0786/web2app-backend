const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Base Route
app.get('/api', (req, res) => {
    res.send('Web2App Vercel API Server is live! 🚀');
});

// Main Post Endpoint
app.post('/api/generate-app', async (req, res) => {
    const { appName, appUrl, logoBase64, outputType } = req.body;

    if (!appName || !appUrl || !logoBase64) {
        return res.status(400).json({ error: 'Saari fields compulsory hain!' });
    }

    return res.json({ 
        success: true, 
        message: 'Request successful via Vercel Serverless!',
        appName: appName
    });
});

module.exports = app;
