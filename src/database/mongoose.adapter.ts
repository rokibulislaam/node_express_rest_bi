import { IDBQueries } from '@interfaces';

import mongoose from 'mongoose';

export class MongooseAdapter<T extends mongoose.Model<T>>
  implements IDBQueries<T>
{
  constructor(private model: T) {}

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
