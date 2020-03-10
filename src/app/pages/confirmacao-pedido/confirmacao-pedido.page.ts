import { Component, OnInit } from '@angular/core';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteDTO } from 'src/app/models/cliente.dto';
import { EnderecoDTO } from 'src/app/models/endereco.dto';
import { ItensPedidoDTO } from 'src/app/models/itens-pedido.dto';
import { CartItem } from 'src/app/models/CartItem';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { PagamentoDTO } from 'src/app/models/pagamento.dto';
import { CartService } from 'src/app/services/cart.service';
import { PedidoService } from 'src/app/services/domain/pedido.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacao-pedido',
  templateUrl: './confirmacao-pedido.page.html',
  styleUrls: ['./confirmacao-pedido.page.scss'],
})
export class ConfirmacaoPedidoPage implements OnInit {


  pedido:PedidoDTO;
  cliente:ClienteDTO;
  endereco:EnderecoDTO;
  itemsCart:CartItem[];

  constructor(private activatedRoute: ActivatedRoute,
              private clienteService:ClienteService,
              private cartService:CartService,
              private pedidoService:PedidoService,
              private alertController: AlertController,
              private route: Router) { 
    this.activatedRoute.queryParams.subscribe(params => {
        this.pedido = JSON.parse(params["pedido"]);
    });

    this.itemsCart = this.cartService.getCart().items;


  }

  ngOnInit() {
    this.clienteService.findById(this.pedido.cliente.id).subscribe(response=>{
      console.log("Pedido ate aqui",this.pedido);
      this.cliente = response as ClienteDTO;
      this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);

    },erro=>{
      console.error(erro);
    })
  }

  findEndereco(id: string, list: EnderecoDTO[]){
    console.log("Lista de enderecos",list);
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  total(){
    return this.cartService.total();
  }

  finalizarPedido(){
      this.pedidoService.salvarPedido(this.pedido).subscribe(response=>{
      let msg:string=`Pedido registrado com sucesso! URL gerada = ${response.headers.get('location')}`;
      this.mensagemConfirmacao(msg);
      this.cartService.apagarCarrinho();
      this.route.navigate(['folder/Inbox']);

      },erro=>{
        console.error(erro);
      })
  }

  async mensagemConfirmacao(msg:string){
    
      let alert = await this.alertController.create({
          message: msg,
          backdropDismiss: false,
          buttons: [
              {
                  text: 'OK'
              }
          ]
      });
      alert.present();
  }
}
