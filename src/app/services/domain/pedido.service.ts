import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class PedidoService{
    constructor(private http: HttpClient){

    }

    salvarPedido(pedido: PedidoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/pedidos`,
        pedido,{
            observe: 'response',
            responseType: 'text'
        }
        );
    }
}