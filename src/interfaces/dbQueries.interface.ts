export interface IDBQueries<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  find(id: string): Promise<T[]>;
  findOne(id: string): Promise<T>;
}
