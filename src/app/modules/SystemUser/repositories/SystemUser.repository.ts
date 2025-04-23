
import { SystemUser, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export class SystemUserRepository {
  async findAll(): Promise<SystemUser[]> {
    return await prisma.systemUser.findMany();
  }

  async findById(id: string): Promise<SystemUser | null> {
    return await prisma.systemUser.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.SystemUserCreateInput): Promise<SystemUser> {
    return await prisma.systemUser.create({ data });
  }

  async update(id: string, data: Prisma.SystemUserUpdateInput): Promise<SystemUser> {
    return await prisma.systemUser.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<SystemUser> {
    return await prisma.systemUser.delete({
      where: { id },
    });
  }
}
