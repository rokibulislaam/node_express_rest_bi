import dotenv from 'dotenv';
import path from 'path';

export default class Config {
  constructor() {
    dotenv.config({
      path: `.env.${process.env.NODE_ENV || 'development'}.local`,
    });
  }
  public static jwtSecret = process.env.JWT_SECRET;
}
