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

    addProduto(prod: ProdutoDTO):Cart{
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == prod.id);
        if (position == -1){
            cart.items.push({quantidade:1, produto:prod});
        }else{
            cart.items[position].quantidade ++;
        }
        this.storageService.setCart(cart);
        return cart;
        
    }

    apagarCarrinho(){
        this.storageService.setCart(null);
    }


    incrementarQuantidadeProduto(prod: ProdutoDTO){
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == prod.id);
        if (position != -1){
            cart.items[position].quantidade ++;
        }
        this.storageService.setCart(cart);
        return cart;
    
    }
    
    removerProduto(prod: ProdutoDTO){
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == prod.id);
        if (position != -1){
            cart.items.splice(position,1);
        }
        this.storageService.setCart(cart);
        return cart;
    
    }
    
    decrementarQuantidadeProduto(prod: ProdutoDTO){
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == prod.id);
        if (position != -1){
            cart.items[position].quantidade --;
            if (cart.items[position].quantidade == 0){
                cart = this.removerProduto(prod);
            }
        }
        this.storageService.setCart(cart);
        return cart;
    
    }
    
    total(): number{
        let cart: Cart = this.getCart();
        let sum :number = 0;
    
        for(let i=0; i<cart.items.length;i++){
            sum += cart.items[i].produto.preco * cart.items[i].quantidade;
        }
        return sum;
    
    }


}