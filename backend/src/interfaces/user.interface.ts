export interface IUser {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: "Administrador" | "Empleado" | "Cliente";
}