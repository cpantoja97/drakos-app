import { Router } from 'express';

const clientRouter = Router();

clientRouter.get('/', async (req, res) => {
  const clients = await req.db.client.findMany();
  res.json(clients);
});

clientRouter.post('/', async (req, res) => {
  const { name, nationalId, nationalIdType } = req.body;
  try {
    const newClient = await req.db.client.create({
      data: { name, nationalId, nationalIdType },
    });
    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating client');
  }
});

export default clientRouter;
