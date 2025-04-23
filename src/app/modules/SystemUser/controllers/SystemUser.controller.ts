import { CreateSystemUserUseCase } from '../useCases/create-SystemUser.useCase';
import { DeleteSystemUserUseCase } from '../useCases/delete-SystemUser.useCase';
import { GetSystemUserByIdUseCase } from '../useCases/get-SystemUser-by-id.useCase';
import { ListSystemUsersUseCase } from '../useCases/list-SystemUser.useCase';
import { UpdateSystemUserUseCase } from '../useCases/update-SystemUser.useCase';
import { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { SystemUser, Prisma } from '@prisma/client';

export class SystemUserController {
  public async create(req: Request, res: Response) {
    try {
      const data: Prisma.SystemUserCreateInput = req.body;

      const result = await new CreateSystemUserUseCase().execute(data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const result = await new ListSystemUsersUseCase().execute();

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new GetSystemUserByIdUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: Partial<SystemUser> = req.body;

      const result = await new UpdateSystemUserUseCase().execute(id, data);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await new DeleteSystemUserUseCase().execute(id);

      return ApiResponse.done(res, result);
    } catch (error: any) {
      return ApiResponse.serverError(res, error);
    }
  }
}