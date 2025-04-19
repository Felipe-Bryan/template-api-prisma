// src/@types/express/index.d.ts
import { AuthPayload } from '../../types/auth-payload';

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}
