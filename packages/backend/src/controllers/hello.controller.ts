import { Request, Response } from 'express';

export const getHello = (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'Hello from the Express.js backend!',
    timestamp: new Date().toISOString()
  });
};