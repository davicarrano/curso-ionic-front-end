import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/Credenciais.dto";
import { StorageService } from "./storage.service";
import { LocalUser } from "../models/local-user";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService{

    constructor(public http:HttpClient, 
                public storageService: StorageService,
                private jwtHelper: JwtHelperService){
        
    }

    autenticar(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`,creds,
        {
            observe:'response',
            responseType:'text'
        });
    }

    refreshToken(){
        return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh_token`,{},
        {
            observe:'response',
            responseType:'text'
        });
    }

    successfulLogin( token: string){
        let tok = token.substring(7);
        console.log("this.jwtHelper.decodeToken(tok): ",this.jwtHelper.decodeToken(tok));
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
            
        }
        this.storageService.setLocalUser(user);
    }

    logout(){
        this.storageService.setLocalUser(null);
    }
}