import { Request, Response } from 'express';

const express = require('express');

const app = express();

/**
 *
 * Configure error handling
 *
 */
function initErrorRoutes() {

  // catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: Function) => {

    const err: any = new Error('Not Found');
    err.status = 404;
    next(err);

  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {

    app.use((err: any, req: Request, res: Response, next: Function) => {

      res.status(err.status);

      res.json({
        error: err,
        message: err.message,
      });

    });

  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err: any, req: Request, res: Response, next: Function) => {

    res.status(err.status || 500);

    res.json({
      error: {},
      message: err.message,
    });

  });

}

app.get('/', (req: Request, res: Response, next: Function) => {

  res.json({
    title: 'Typescript Build Demo',
  });

});

initErrorRoutes();

const server = app.listen(process.env.PORT || '3000', () => {

  const host = server.address().address;
  const port = server.address().port;

});
