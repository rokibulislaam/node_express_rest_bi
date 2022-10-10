import { IDBQueries } from '@interfaces';
import { UserService, BaseService } from '@services';
import { Request, Response } from 'express';

export class BaseController {
  constructor(public service: BaseService<any>) {}
  post = async (req: Request, res: Response) => {};
  update = async (req: Request, res: Response) => {};
  delete = async (req: Request, res: Response) => {};
}
