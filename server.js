import 'dotenv/config';
import e from 'express';
import connectDb from './config/connection';

const app = e();
const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDb();
  app.listen(PORT, () => { console.log('Server running at localhost:', PORT) });
}

startServer();