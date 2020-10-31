import {BaseController} from '../shared/classes/base-controller.abstract';

import * as express from 'express';
import {Request, Response} from 'express';
import {HomeModel} from './home.model';

export class HomeController extends BaseController {
  constructor() {
    super('/');
  }

  public initRoutes(): void {
    this.router.get('/', this.homeRoute);
  }

  public homeRoute(request: Request, response: Response): void {
    const viewData = {name: HomeModel.getName()};

    console.log(JSON.stringify(viewData));
    response.render('home', viewData);
  }
}

export default HomeController;
