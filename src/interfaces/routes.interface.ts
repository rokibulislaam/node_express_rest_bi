import {Router} from 'express'
/**
 * @todo add role based routing type or auth protection based route type
 */
export interface IRoutes {
  path: string;
  router: Router;
}