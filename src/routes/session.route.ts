import { IRoutes } from '@interfaces';
import { AuthController, SessionController } from '@controllers';
import { Router } from 'express';
import { autoInjectable } from 'tsyringe';
@autoInjectable()
class LearnerSessionRoute implements IRoutes {
  public router = Router();
  public path = '/learner';
  constructor(private sessionController: SessionController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/sessions', this.sessionController.getLearnerSessions);
  }
}

export { LearnerSessionRoute };
