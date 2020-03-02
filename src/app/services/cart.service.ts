import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Cart } from '../models/Cart';
import { ProdutoDTO } from '../models/Produto.dto';

@Injectable()
export class CartService {
    constructor(private storageService:StorageService){

    }
    createOrClearCart():Cart{
        let cart: Cart = {items:[]};
        this.storageService.setCart(cart);
        return cart;
    }

    getCart():Cart{
        let cart: Cart = this.storageService.getCart();
        if (cart == null){
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(quant:number, prod: ProdutoDTO):Cart{
        let cart: Cart = this.getCart();
        //position do produto no carrinho
        cart.items.push({quantidade:quant, produto:prod});
    }
}