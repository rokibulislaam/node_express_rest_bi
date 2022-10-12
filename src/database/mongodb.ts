import { autoInjectable, singleton } from 'tsyringe';
import mongoose from 'mongoose';
import { logger } from '@utils';
import {config} from '@config';

@autoInjectable()
@singleton()
export class MongoDB {
  connect() {
    mongoose
      .connect(config.DB_CONNECTION_STRING)
      .then(() => {
        logger.info('MongoDB connected');
      })
      .catch((err) => {
        logger.error(err);
        process.exit(1);
      });
  }
}
