import { Request, Response } from 'express';

export const echo = (req: Request, res: Response) => {
  const data = req.body;
  
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  
  res.status(200).json({ 
    echo: data,
    timestamp: new Date().toISOString()
  });
};