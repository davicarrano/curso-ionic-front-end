import { Component, OnInit } from '@angular/core';
import { EnderecoDTO } from 'src/app/models/endereco.dto';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { ClienteDTO } from 'src/app/models/cliente.dto';
import { LocalUser } from 'src/app/models/local-user';
import { StorageService } from 'src/app/services/storage.service';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { Cart } from 'src/app/models/Cart';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-escolher-enderecos',
  templateUrl: './escolher-enderecos.page.html',
  styleUrls: ['./escolher-enderecos.page.scss'],
})
export class EscolherEnderecosPage implements OnInit {

  cliente: ClienteDTO;
  enderecos: EnderecoDTO[];
  pedido: PedidoDTO;

  constructor(private clienteService: ClienteService,
              private storageService: StorageService,
              private route: Router) { 

              }

  ngOnInit() {
    let user: LocalUser = this.storageService.getLocalUser();
    let cart: Cart = this.storageService.getCart();
    if (user){
      this.clienteService.findByEmail(user.email).subscribe(response=>{
        this.enderecos = response['enderecos'];
        this.pedido = {
          cliente: {id: response['id']},
          enderecoDeEntrega:null,
          pagamento:null,          
          itens: cart.items.map(x => {return {quantidade: x.quantidade, 
                                              produto: {id: x.produto.id}}})
        }
        
        
      },erro=>{

      });
    }
  }

  selecionar(enderecoId){
    this.pedido.enderecoDeEntrega = {id: enderecoId};
    let navigationExtras: NavigationExtras = {
      queryParams: {
          pedido: JSON.stringify(this.pedido)
          
      }
    };
    this.route.navigate(['payment'],navigationExtras);
  }

  

}
