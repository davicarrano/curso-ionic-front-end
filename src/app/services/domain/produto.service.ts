import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoDTO } from '../../models/Produto.dto';
import { API_CONFIG } from '../../config/api.config';

@Injectable()
export class ProdutoService{
    constructor(public http: HttpClient){

    }

    findByIdCategoria(idCategoria:String):Observable<ProdutoDTO[]>{
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos/porCat/${idCategoria}`);

    }

}