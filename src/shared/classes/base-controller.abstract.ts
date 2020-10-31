import * as express from 'express';
export abstract class BaseController {
  public path = '/';
  public router = express.Router();

  constructor(path: string) {
    this.path = path;
    this.initRoutes();
  }

  public abstract initRoutes(): void;
}
