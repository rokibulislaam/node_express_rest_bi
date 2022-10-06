import app from './app';
import { logger } from '@utils';

app.listen(3001, () => {
  logger.warn('Server listening on port 3001');
});
