import { alumnos, PrismaClient } from "@prisma/client";
import { fromPrismaAlumno, toPrismaAlumno } from "../mappers/alumnoMapper";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";


const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno)=>{
    console.log('alumnoService::insertarAlumno');
    await prisma.alumnos.create({
        data: toPrismaAlumno(alumno)
    });
    return RESPONSE_INSERT_OK;
}

export const listarAlumnos = async () => {
    console.log('alumnoService::listarAlumnos');
    const alumnos: alumnos[] = await prisma.alumnos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_alumno: 'asc'
        }
    });
    return alumnos.map((alumno: alumnos)=> fromPrismaAlumno(alumno));
}

export const obtenerAlumno = async (idAlumno: number)=> {
    console.log('alumnoService::obtenerAlumno');
    const alumno: alumnos = await prisma.alumnos.findUnique({
        where: {
            id_alumno: idAlumno,
            estado_auditoria: '1'
        }
    });
    return fromPrismaAlumno(alumno);
}

export const modificarAlumno = async (idAlumno: number, alumno: IAlumno ) => {
    console.log('alumnoService::modificarAlumno');
    await prisma.alumnos.update({
        data: toPrismaAlumno(alumno),
        where: {
            id_alumno: idAlumno
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarAlumno = async (idAlumno: number) => {
    await prisma.alumnos.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_alumno: idAlumno
        }
    });
    return RESPONSE_DELETE_OK;
}