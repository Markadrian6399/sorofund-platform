import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SoroFund API is running' });
});

// Campaign Placeholder Routes
app.get('/api/campaigns', (req, res) => {
    res.json({ campaigns: [] });
});

app.post('/api/campaigns', (req, res) => {
    // Logic to interact with Soroban contract goes here
    res.status(201).json({ message: 'Campaign creation initiated', campaignId: 1 });
});

app.post('/api/campaigns/:id/pledge', (req, res) => {
    res.json({ message: 'Pledge initiated', success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
