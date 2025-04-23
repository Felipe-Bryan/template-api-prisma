
import { Result } from '../../../shared/contracts/result.contract';
import { Return } from '../../../shared/util/return.adapter';
import { SystemUserRepository } from '../repositories/SystemUser.repository';

export class DeleteSystemUserUseCase {
  constructor(private SystemUserRepo: SystemUserRepository = new SystemUserRepository()) {}

  public async execute(id: string): Promise<Result> {
    const SystemUser = await this.SystemUserRepo.findById(id);

    if (!SystemUser) {
      return Return.notFound('SystemUser');
    }

    const result = await this.SystemUserRepo.delete(id);

    return Return.success(result, 'SystemUser deleted');
  }
}
  
// await new CacheRepository().[get(key), set(key, value) ou delete(key)] para manipular os dados em cache utilizando o Redis