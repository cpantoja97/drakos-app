import { PrismaClient } from '@prisma/client';
import express, { Request, Response, NextFunction } from 'express';

// Instantiate Prisma Client
const prisma = new PrismaClient();

// Extend Express's Request type to include Prisma
declare global {
  namespace Express {
    interface Request {
      db: PrismaClient;
    }
  }
}

// Middleware to inject Prisma into req
const injectDependencies = (req: Request, res: Response, next: NextFunction) => {
  req.db = prisma;
  next();
};

export { injectDependencies, prisma };
