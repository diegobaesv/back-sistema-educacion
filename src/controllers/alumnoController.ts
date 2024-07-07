import { Request, Response } from "express";
import * as alumnoService from "../services/alumnoService";

export const insertarAlumno = async (req: Request, res:Response)=>{
    console.log('alumnoController::insertarAlumno');
    const response = await alumnoService.insertarAlumno(req.body);
    res.json(response);
}

export const listarAlumnos = async (req: Request, res: Response) => {
    console.log('alumnoController::listarAlumnos');
    const alumnos = await alumnoService.listarAlumnos();
    res.json(alumnos);
}