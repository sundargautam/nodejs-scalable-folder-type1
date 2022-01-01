import { NextFunction, Request, Response } from "express";
import { IError } from "./types";
export const notFoundHandlers = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error: IError = new Error(`API path ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
};

export const globalErrorHandlers = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { fieldname, status, message, stack } = err;
  if (status !== 404) {
    console.error(err);
  }
  res.status(status || 500);
  res.send({
    ok: false,
    error: true,
    fieldname,
    message: message ? message : "Server Error",
    // stack: config.app.isDev && status !== 404 ? stack : undefined,
  });
  next();
};
