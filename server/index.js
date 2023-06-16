import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRouter from './routes/dalle.routes.js';

dotenv.config();

const app = express(); 
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRouter);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World!' });
}
);

app.listen(5000, () => console.log('Server is running on port 5000'));
