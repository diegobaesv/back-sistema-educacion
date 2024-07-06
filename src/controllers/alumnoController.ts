import { Request, Response } from "express";

export const insertarAlumno = (req: Request, res:Response)=>{
    //validar
    //llamar a la capa service
    //responder lo obtenido del service
    console.log('req.body',req.body);
    res.send('Ejecutado insertarAlumno');
}