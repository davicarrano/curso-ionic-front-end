import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/models/Credenciais.dto';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { MenuController } from '@ionic/angular';

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
     public menu: MenuController
) { 

  }

  login(){
     this.auth.autenticar(this.creds).subscribe(response=>{
       this.auth.successfulLogin(response.headers.get('Authorization'));   
       this.router.navigate(['folder/Inbox']);
      
     }, erro=>{
       console.log(erro);
     });

  }

  ngOnInit() {
    
  }

  ionViewWillEnter (){
    this.menu.swipeGesture(false);

  }

  ionViewWillLeave (){
    this.menu.swipeGesture(true);
  }

}
