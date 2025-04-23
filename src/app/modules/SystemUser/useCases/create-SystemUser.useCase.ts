
import { Prisma } from '@prisma/client';
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { SystemUserRepository } from '../repositories/SystemUser.repository';

export class CreateSystemUserUseCase {
  constructor(private SystemUserRepo: SystemUserRepository = new SystemUserRepository()) {}

  public async execute(data: Prisma.SystemUserCreateInput): Promise<Result> {
    const result = await this.SystemUserRepo.create(data);

    return Return.created(result, 'SystemUser created');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis