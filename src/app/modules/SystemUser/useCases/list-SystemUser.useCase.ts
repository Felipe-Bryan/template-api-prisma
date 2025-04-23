
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { SystemUserRepository } from '../repositories/SystemUser.repository';

export class ListSystemUsersUseCase {
  constructor(private SystemUserRepo: SystemUserRepository = new SystemUserRepository()) {}

  public async execute(): Promise<Result> {
    const SystemUsers = await this.SystemUserRepo.findAll();

    if (!SystemUsers || SystemUsers.length === 0) {
      return Return.notFound('SystemUsers');
    }

    return Return.success(SystemUsers, 'SystemUsers found');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis
