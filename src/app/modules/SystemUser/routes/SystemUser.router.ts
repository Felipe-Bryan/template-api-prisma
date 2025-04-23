
import { Router } from 'express';
import { SystemUserController } from '../controllers/SystemUser.controller';

export const SystemUserRoutes = () => {
  const app = Router();

  app.get('/', new SystemUserController().list);
  app.get('/:id', new SystemUserController().get);
  app.post('/', new SystemUserController().create);
  app.put('/:id', new SystemUserController().update);
  app.delete('/:id', new SystemUserController().delete);

  return app;
}; // Necessário configurar os validators e adicionar rotas de acordo com o projeto
