import { SignUpRequest } from "../types/type";

export function ValidateSignUpRequest(request : SignUpRequest): boolean {
    if(request.name=="" || request.password==""){
        return false;
    }
    return ValidatePassword(request.password);
}

export function ValidatePassword(password : string) : boolean {
    if(password.length <=3){
        return false;
    }
    return true;
}