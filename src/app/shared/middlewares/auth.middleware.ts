import { Request, Response, NextFunction } from 'express';
import { AuthUtil } from '../util/auth.util';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];
  const payload = AuthUtil.verifyToken(token);

  if (!payload) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }

  // Você pode adicionar os dados do usuário no request
  req.user = payload;

  next();
}
