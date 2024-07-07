import { Request, Response } from "express";
import * as alumnoService from "../services/alumnoService";

export const insertarAlumno = (req: Request, res:Response)=>{
    console.log('alumnoController::insertarAlumno');
    const response = alumnoService.insertarAlumno(req.body);
    res.json(response);
}