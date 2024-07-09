import express, { Application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import alumnoRoute from './routes/alumnoRoute';

const app: Application = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use('/api/v1/alumnos',alumnoRoute);

export default app;