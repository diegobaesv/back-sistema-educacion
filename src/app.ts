import express, { Application } from 'express';
import logger from 'morgan';

const app: Application = express();

app.use(express.json());
app.use(logger('dev'));

export default app;