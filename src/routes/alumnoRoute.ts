import express, { Router } from 'express';
import { insertarAlumno } from '../controllers/alumnoController';

const router: Router = express.Router();

router.post('/',insertarAlumno);

export default router;