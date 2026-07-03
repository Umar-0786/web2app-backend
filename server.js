const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Blogger se request accept karne ke liye CORS configuration
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Logo image large ho sakti hai

// Base Route testing ke liye
app.get('/', (req, res) => {
    res.send('Web2App API Server is running successfully! 🚀');
});

// Main Endpoint: Jab Blogger par user generate click karega
app.post('/api/generate-app', async (req, res) => {
    const { appName, appUrl, logoBase64, outputType } = req.body;

    if (!appName || !appUrl || !logoBase64) {
        return res.status(400).json({ error: 'Saari fields compulsory hain!' });
    }

    try {
        // TODO: Yahan hum GitHub Actions API trigger karne ka logic dalenge
        console.log(`Processing build for: ${appName} (${outputType})`);

        // Abhi testing ke liye temporary success response send kar rahe hain
        return res.json({ 
            success: true, 
            message: 'Build request received! Cloud compilation started.',
            statusUrl: 'https://github.com/your-username/repo/actions' // Sample tracking link
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server integration failed.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});
