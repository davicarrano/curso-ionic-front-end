import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/models/Credenciais.dto';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { MenuController } from '@ionic/angular';
import { LocalUser } from 'src/app/models/local-user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO = {
    email : '',
    senha : ''
  };

  constructor(public router: Router,
     public auth: AuthService,
     public storage: StorageService,
     public menu: MenuController,
     private cartService: CartService
) { 

  }

  login(){
     this.auth.autenticar(this.creds).subscribe(response=>{
       this.auth.successfulLogin(response.headers.get('Authorization'));   
       this.cartService.createOrClearCart();
       this.router.navigate(['folder/Inbox']);
      
     }, erro=>{
       console.log(erro);
     });

  }

  ngOnInit() {
    let localUser :LocalUser = this.storage.getLocalUser();
    
    if (localUser!=null){
      this.router.navigate(['folder/Inbox']);
    }
  }

  ionViewWillEnter (){
    this.menu.swipeGesture(false);

  }

  ionViewWillLeave (){
    this.menu.swipeGesture(true);
  }

}
