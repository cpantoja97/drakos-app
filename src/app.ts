import express, { Request, Response } from 'express';
import { injectDependencies } from './middleware/dependencies';
import router from './router';

// Initialize the app
const app = express();

// Middleware to inject dependencies
app.use(injectDependencies);

// Middleware to parse JSON
app.use(express.json());

// TODO: add logging

app.use('/api', router);

// Basic route to test
app.get('/', (req: Request, res: Response) => {
  res.send("Hello, Drako's!");
});

export default app;
