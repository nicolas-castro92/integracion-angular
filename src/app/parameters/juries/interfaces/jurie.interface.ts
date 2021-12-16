export interface Jurie {
    id:      number;
    nombre:  string;
    celular: string;
    correo:  string;
    entidad: string;
}

export interface JurieUser {
    ok?:           boolean;
    tk?:          string;
    usuario?:     Jurie;
}