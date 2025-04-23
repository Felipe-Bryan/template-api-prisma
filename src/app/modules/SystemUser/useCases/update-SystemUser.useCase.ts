
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { SystemUserRepository } from '../repositories/SystemUser.repository';

export class UpdateSystemUserUseCase {
  constructor(private SystemUserRepo: SystemUserRepository = new SystemUserRepository()) {}

  public async execute(id: string, data: Prisma.SystemUserUpdateInput): Promise<Result> {
    const SystemUser = await this.SystemUserRepo.findById(id);

    if (!SystemUser) {
      return Return.notFound('SystemUser');
    }

    const updatedSystemUser = await this.SystemUserRepo.update(id, data);

    return Return.success(updatedSystemUser, 'SystemUser updated');
  }
}

// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
