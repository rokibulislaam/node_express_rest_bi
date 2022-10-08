import { IDBQueries } from '@interfaces';
import { UserService, BaseService } from '@services';
import { Request, Response } from 'express';

export class BaseController {
  constructor(protected service: BaseService<any>) {}

  async post(req: Request, res: Response) {
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}
