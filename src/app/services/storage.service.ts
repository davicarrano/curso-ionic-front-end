import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage-keys.config";
import { LocalUser } from "../models/local-user";
import { Cart } from '../models/Cart';

@Injectable()
export class StorageService{

    getLocalUser(){
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user==null){
            return null;
        }else{
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: LocalUser){
        if (obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);    
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
        
    }


    getCart(){
        let cart = localStorage.getItem(STORAGE_KEYS.cart);
        if (cart==null){
            return null;
        }else{
            return JSON.parse(cart);
        }
    }

    setCart(obj: Cart){
        if (obj == null){
            localStorage.removeItem(STORAGE_KEYS.cart);    
            console.log('removeu o carrinho');
        }else{
            localStorage.setItem(STORAGE_KEYS.cart,JSON.stringify(obj));
        }
        
    }
}