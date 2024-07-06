import express, { Application, Request, Response } from 'express';
import logger from 'morgan';

import alumnoRoute from './routes/alumnoRoute';

const app: Application = express();

app.use(express.json());
app.use(logger('dev'));

/*app.get('/saludar', (req: Request, res:Response) => {
    res.send('Hola desde Nodejs');
});*/

app.use('/api/v1/alumnos',alumnoRoute);

export default app;