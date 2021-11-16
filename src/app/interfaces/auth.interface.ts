export interface AuthResp {
    ok?:           boolean;
    tk?:          string;
    usuario?:     Usuario;
    usuarioxrol?: Usuarioxrol;
    mensaje?:     string;
}

export interface Respuesta {
    ok?: boolean;
}

export interface Usuario {
    id?:          number;
    nombre?:      string;
    apellido?:    string;
    correo?:      string;
    celular?:     string;
    estado?:      string;
}

export interface Usuarioxrol {
    id?:         number;
    id_usuario?: number;
    id_rol?:     number;
}

