import express, { Request, Response } from 'express';

// Initialize the app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route to test
app.get('/', (req: Request, res: Response) => {
  res.send("Hello, Drako's!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
