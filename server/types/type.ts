
export interface SignUpRequest {
    name : string,
    password : string
}

export interface SignUpResponse {
    message : string
}


export interface LoginRequest {
    name : string,
    password : string
}

export interface LoginResponse {
    message : string
}

export interface User {
    name : string,
    password : string
}