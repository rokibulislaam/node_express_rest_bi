import { BaseRepository } from '@repositories';

export class BaseService<T> {
  constructor(public repository: BaseRepository<T>) {
  }
}

