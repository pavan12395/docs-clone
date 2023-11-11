
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

export interface Doc {
    name : string,
    userName : string,
    docData : Buffer
}

export interface AddDocRequest {
    name : string,
    userName : string,
    docData : string
}

export interface AddDocResponse {
    message : string
}

export interface EditDocRequest {
    name : string,
    docData : string
}

export interface EditDocResponse { 
    message : string
}

export interface GetDocRequest {
    name : string
}

export interface GetDocResponse {
    docData : string,
    message : string
}