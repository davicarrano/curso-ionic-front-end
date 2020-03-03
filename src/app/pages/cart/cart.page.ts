import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Cart;
  constructor(private cartService: CartService,
              private route: Router) { }

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

}
