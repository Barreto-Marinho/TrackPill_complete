export interface User{
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
}

export interface datos_usuario{
    nombre: string;
    apellido:string;
    anio:string;
    mes:string;
    dia:string;
    genero:string;
}

export interface compartimento{
    marca: string;
    medicamento:string;
    Npastilla:string;
    Ntratamiento:string;
    temp_max:string;
    hum_max:string;
    hora:string;

}