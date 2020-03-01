import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriaDTO } from '../models/Categoria.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from './storage.service';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient,
                public storageService:StorageService){

    }

    findAll():Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias/todas`);
    }

}