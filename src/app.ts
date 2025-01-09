import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { injectDependencies } from './middleware/dependencies';
import router from './router';
import logger from './utils/logger';

// Initialize the app
const app = express();

// Middleware to inject dependencies
app.use(injectDependencies);

// Middleware to parse JSON
app.use(express.json());

// Create a morgan stream that uses winston
const stream = {
  write: (message: string) => logger.info(message.trim()), // Trim removes extra newline
};

// Use morgan with the custom winston stream
app.use(morgan('dev', { stream }));

// Router
app.use('/api', router);

// Basic route to test
app.get('/', (req: Request, res: Response) => {
  res.send("Hello, Drako's!");
});

export default app;
