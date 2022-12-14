import { IDBQueries } from "@interfaces";
import { FilterQuery, ProjectionType } from "mongoose";

/**
 * @deprecated
 */
export abstract class BaseDatabase<T> implements IDBQueries<T> {
  create(item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(filter: FilterQuery<T>, projection?: ProjectionType<T> | undefined): Promise<T> {
    throw new Error("Method not implemented.");
  }

}