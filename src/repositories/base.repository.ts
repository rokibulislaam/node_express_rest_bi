import { IDBQueries } from '@interfaces';
import mongoose from 'mongoose';

/**
 * Using generic repository pattern
 */
export abstract class BaseRepository<T> implements IDBQueries<T> {
  // constructor(private db: BaseDatabase<T>) {}
  constructor(public model: mongoose.Model<T>) {}

  create(item: T): Promise<T> {
    return this.model.create(item);
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(id: string): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
