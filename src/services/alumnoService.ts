import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno)=>{
    console.log('alumnoService::insertarAlumno');
    await prisma.alumnos.create({
        data: {
            codigo: alumno.codigo,
            documento_identidad: alumno.documentoIdentidad,
            nombres: alumno.nombres,
            apellido_paterno: alumno.apellidoPaterno,
            apellido_materno: alumno.apellidoMaterno,
            correo_institucional: alumno.correoInstitucional,
            fecha_nacimiento: alumno.fechaNacimiento,
            sexo: alumno.sexo,
            direccion: alumno.direccion
        }
    });
    return {estado:'creado'};
}

export const listarAlumnos = async () => {
    console.log('alumnoService::listarAlumnos');
    const alumnos = await prisma.alumnos.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return alumnos;
}