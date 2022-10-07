import Config from '@config';
import { HttpError } from '@errors';
import { IJWTPayload } from '@interfaces';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization
    ? req.headers.authorization.split('Bearer ')[1]
    : null;

  if (bearer) {
    const secret = Config.jwtSecret;
    try {
      const jwtPayload = jwt.verify(bearer, secret) as IJWTPayload;
    } catch (err) {
      next(new HttpError(401, 'Authentication failed'));
    }
  } else {
    next(new HttpError(401, 'Authentication token missing'));
  }
};

export { authMiddleware };
