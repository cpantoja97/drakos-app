import { Router } from 'express';
import clientsRouter from './client/client-router';
import serviceBlockRouter from './serviceBlock/serviceBlock-router';

const router = Router();

// Group related routes
router.use('/clients', clientsRouter);
router.use('/service-block', serviceBlockRouter);

export default router;
