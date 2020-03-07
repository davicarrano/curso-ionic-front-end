import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDTO } from 'src/app/models/Produto.dto';
import { StorageService } from 'src/app/services/storage.service';
import { LocalUser } from 'src/app/models/local-user';
import { ClienteDTO } from 'src/app/models/cliente.dto';
import { ClienteService } from 'src/app/services/domain/cliente.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Cart;  

  constructor(private cartService: CartService,
              private route: Router,
              private storageService: StorageService,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }



  ionViewDidEnter(){
    this.cart = this.cartService.getCart();
    
  
  }
  apagarCarrinho(){
    this.cartService.apagarCarrinho();
    this.cart = this.cartService.getCart();
  }

  addNovoItem(){
    this.route.navigate(['categoria']);
  }

  incrementarQuantidadeProduto(prod: ProdutoDTO){
    this.cart = this.cartService.incrementarQuantidadeProduto(prod);
  }

  decrementarQuantidadeProduto(prod: ProdutoDTO){
    this.cart = this.cartService.decrementarQuantidadeProduto(prod);
  }

  removerProduto(prod: ProdutoDTO){
    this.cart = this.cartService.removerProduto(prod);
  }

  total(){
    return this.cartService.total();
  }

  finalizarCompra(){

    this.route.navigate(['escolher-enderecos']);

    
  }


}
