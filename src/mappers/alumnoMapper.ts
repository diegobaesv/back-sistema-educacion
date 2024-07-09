import { alumnos } from "@prisma/client";

export const fromPrismaAlumno = (alumno: alumnos) => ({
    idAlumno: alumno.id_alumno,
    codigo: alumno.codigo,
    documentoIdentidad: alumno.documento_identidad,
    nombres: alumno.nombres,
    apellidoPaterno: alumno.apellido_paterno,
    apellidoMaterno: alumno.apellido_materno,
    correoInstitucional: alumno.correo_institucional,
    fechaNacimiento: alumno.fecha_nacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion,
    fechaCreacion: alumno.fecha_creacion
});

export const toPrismaAlumno = (alumno: IAlumno) => ({
    codigo: alumno.codigo,
    documento_identidad: alumno.documentoIdentidad,
    nombres: alumno.nombres,
    apellido_paterno: alumno.apellidoPaterno,
    apellido_materno: alumno.apellidoMaterno,
    correo_institucional: alumno.correoInstitucional,
    fecha_nacimiento: alumno.fechaNacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion
});