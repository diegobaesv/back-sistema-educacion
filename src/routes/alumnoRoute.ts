import express, { Router } from 'express';
import { insertarAlumno, listarAlumnos } from '../controllers/alumnoController';

const router: Router = express.Router();

router.post('/',insertarAlumno);
router.get('/',listarAlumnos)

export default router;