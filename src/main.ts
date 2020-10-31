import App from './app';

import * as bodyParser from 'body-parser';
import HomeController from './home/home.controller';
import loggerMiddleware from './core/middlewares/logger.middleware';

const app = new App({
  port: 8080,
  controllers: [new HomeController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    loggerMiddleware,
  ],
});

app.listen();
