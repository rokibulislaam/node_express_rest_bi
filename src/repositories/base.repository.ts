import { IDBQueries, IUser } from '@interfaces';
import mongoose from 'mongoose';
/**
 * Using generic repository pattern
 */
export abstract class BaseRepository<T> {
  // constructor(private db: BaseDatabase<T>) {}
  constructor(public model: mongoose.Model<T>) {}

  async create(item: T) {
    return await this.model.create(item).then((res) => res.toObject())
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  updateOne(filter: mongoose.FilterQuery<T>, payload: Partial<T>) {
    return this.model.updateOne(filter, payload);
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(id: string): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(
    filter: mongoose.FilterQuery<T>,
    projection?: mongoose.ProjectionType<T>
  ): Promise<T> {
    return this.model.findOne(filter, projection) as unknown as Promise<T>;
  }
}
