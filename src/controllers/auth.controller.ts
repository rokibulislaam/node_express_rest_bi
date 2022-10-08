import { UserService } from '@services';
import { Request, Response } from 'express';
import { BaseController } from './base.controller';
// class AuthController {
//   public userModel = userModel;
//   constructor() {}
//   public login(req: Request, res: Response, next: NextFunction) {}
//   public logout(req: Request, res: Response, next: NextFunction) {}
//   public signup(req: Request, res: Response, next: NextFunction) {}
// }

// export { AuthController };

export class AuthController extends BaseController {
  constructor(protected userService: UserService) {
    super(userService);
  }

  async login(req: Request, res: Response) {
    
    // const user = this.userService.getUserById('');
  }
  
}
