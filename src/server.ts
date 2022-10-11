import 'reflect-metadata';

import App from './app';
import { AuthRoute } from '@routes';
import { container } from 'tsyringe';
import { MongoDB } from '@database';

const authRoute = container.resolve(AuthRoute);
const database = container.resolve(MongoDB);
const app = new App([authRoute], database);

app.startServer();
