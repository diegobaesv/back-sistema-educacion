import { Request, Response } from "express";
import * as alumnoService from "../services/alumnoService";
import { ResponseModel } from "../shared/responseModel";

export const insertarAlumno = async (req: Request, res:Response)=>{
    try {
        console.log('alumnoController::insertarAlumno');
        const response = await alumnoService.insertarAlumno(req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarAlumnos = async (req: Request, res: Response) => {
    try {
        console.log('alumnoController::listarAlumnos');
        const alumnos = await alumnoService.listarAlumnos();
        res.json(ResponseModel.success(alumnos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    try {
        console.log('alumnoController::obtenerAlumno');
        const { id } = req.params;
        const alumno = await alumnoService.obtenerAlumno(Number(id));
        res.json(ResponseModel.success(alumno));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const modificarAlumno = async (req: Request, res: Response) => {
    try {
        console.log('alumnoController::modificarAlumno');
        const { id } = req.params;
        const response = await alumnoService.modificarAlumno(Number(id),req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    try {
        console.log('alumnoController::eliminarAlumno');
        const { id } = req.params;
        const response = await alumnoService.eliminarAlumno(Number(id));
        res.json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}
