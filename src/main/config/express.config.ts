import cors from 'cors';
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import router from '../../app/routes';
dotenv.config();

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      ok: true,
      msg: 'API',
    });
  });

  // ROUTES
  app.use('/api', router);

  return app;
};
