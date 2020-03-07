import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/models/local-user';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { ClienteDTO } from 'src/app/models/cliente.dto';
import { API_CONFIG } from 'src/app/config/api.config';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  clienteLogado:ClienteDTO;
  urlFoto:string;
  
  constructor(
    private storage: StorageService,
    private route:Router,
    private clienteService: ClienteService,
    private authService: AuthService) { }

  loadData(){
    let user:LocalUser = this.storage.getLocalUser();
    console.log(user);
    if (user){
      this.clienteService.findByEmail(user.email).subscribe(response=>{
        this.clienteLogado = response as ClienteDTO;
        this.urlFoto = `${API_CONFIG.bucketUrl}/profile${this.clienteLogado.id}.jpg`;
      },erro=>{
        this.route.navigate[('login')];
      })
      

    }else{
      this.route.navigate[('login')];
    }

  }


  ngOnInit() {
    this.loadData();
  }

  ionViewDidEnter(){
    this.loadData();
  }

  logout(){
    this.authService.logout();
    this.clienteLogado = null;
    this.urlFoto = '';
    this.route.navigate(['login']);
  }

}
