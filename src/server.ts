import * as Koa from 'koa';
import { routes } from 'routes';

import { databaseInitializer } from 'initializers/database';


const start = async () => {
  await databaseInitializer()

  const app = new Koa();

  app
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(3000);
}

start()