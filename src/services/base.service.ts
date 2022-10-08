import { IDBQueries } from '@interfaces';
import { BaseRepository } from 'repositories/base.repository';

export class BaseService<T> {
  constructor(public repository: BaseRepository<T>) {
  }
}

