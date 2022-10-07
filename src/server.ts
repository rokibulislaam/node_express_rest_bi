import App from './app';
import Router from 'express';

const router = Router();
const app = new App([
  {
    router: router.use('/', (req, res) => {
      console.log(req.headers);
    }),
  },
]);
app.startServer();
