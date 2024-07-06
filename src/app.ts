import express, { Application, Request, Response } from 'express';
import logger from 'morgan';

const app: Application = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/saludar', (req: Request, res:Response) => {
    res.send('Hola desde Nodejs');
});

export default app;