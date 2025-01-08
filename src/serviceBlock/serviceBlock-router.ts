import { Router } from 'express';

const serviceBlockRouter = Router();

serviceBlockRouter.get('/', async (req, res) => {
  res.json({ message: 'To be implemented' });
});

export default serviceBlockRouter;
