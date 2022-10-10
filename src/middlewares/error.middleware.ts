import { HttpError } from '@errors';
import { logger } from '@utils';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    logger.error(
      `${req.method} || ${req.path} || StatusCode: ${status} || Message: ${message}`
    );
    res.status(status).json({ message });
  } catch (err) {
    next(err)
  }
};

export default errorMiddleware
