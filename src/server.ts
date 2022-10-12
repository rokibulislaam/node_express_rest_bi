import 'reflect-metadata';

import App from './app';
import { AuthRoute, LearnerSessionRoute } from '@routes';
import { container } from 'tsyringe';
import { MongoDB } from '@database';

const database = container.resolve(MongoDB);
const authRoute = container.resolve(AuthRoute);
const learnerSessionRoute = container.resolve(LearnerSessionRoute);
const app = new App([authRoute, learnerSessionRoute], database);

app.startServer();
