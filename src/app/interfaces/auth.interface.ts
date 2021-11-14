export interface AuthResp {
    ok:      boolean;
    tk?:      string;
    usuario?: Usuario;
    mensaje?: string;
}

export interface Respuesta {
    ok: boolean;
}

export interface Usuario {
    id?:          number;
    nombre?:      string;
    apellido?:    string;
    correo?:      string;
    celular?:     string;
    estado?:      string;
}