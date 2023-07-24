const express = require('express')

import purchaseListRoutes from './routes/purchaseListRoutes';

const app = express();

app.use(express.json());

app.use('/api', purchaseListRoutes);



export default app;