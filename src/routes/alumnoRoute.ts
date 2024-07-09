import express, { Router } from 'express';
import { insertarAlumno, listarAlumnos, modificarAlumno, obtenerAlumno } from '../controllers/alumnoController';

const router: Router = express.Router();

router.post('/',insertarAlumno);
router.get('/',listarAlumnos);
router.get('/:id',obtenerAlumno);
router.put('/:id',modificarAlumno);

export default router;