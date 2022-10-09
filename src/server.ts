import 'reflect-metadata';

import App from './app';
import { AuthRoute } from '@routes';
import { container } from 'tsyringe';

const authRoute = container.resolve(AuthRoute);
const app = new App([authRoute]);

app.startServer();
