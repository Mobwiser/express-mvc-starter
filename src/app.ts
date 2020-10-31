import express from 'express';
import {Application} from 'express';
import path from 'path';
import {BaseController} from 'shared/classes/base-controller.abstract';

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {port: number; middleWares: any; controllers: any}) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
    this.template();
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller: BaseController) => {
      this.app.use(controller.path, controller.router);
    });
  }

  private assets() {
    this.app.use('/static', express.static(path.join(__dirname, 'public')));
    this.app.set('views', path.join(__dirname, 'views'));
  }

  private template() {
    this.app.set('view engine', 'ejs');
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
