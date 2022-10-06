import {  morganStream } from '@utils';
import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(
  morgan('combined', {
    stream: morganStream,
  })
);



export default app;
