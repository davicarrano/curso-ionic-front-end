import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CidadeService } from 'src/app/services/domain/cidade.service';
import { ClienteService } from 'src/app/services/domain/cliente.service';
import { EstadoService } from 'src/app/services/domain/estado.service';
import { EstadoDTO } from 'src/app/models/estado.dto';
import { CidadeDTO } from 'src/app/models/cidade.dto';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formCliente: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController,
    public route: Router

  ) {
    this.formCliente = this.formBuilder.group({
      nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
      tipo : ['1', [Validators.required]],
      cpfOuCnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      logradouro : ['Rua Via', [Validators.required]],
      numero : ['25', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', []],
      cep : ['10828333', [Validators.required]],
      telefone1 : ['977261827', [Validators.required]],
      telefone2 : ['', []],
      telefone3 : ['', []],
      estadoId : [null, [Validators.required]],
      cidadeId : [null, [Validators.required]]      
    });

   }

   ngOnInit() {
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
        console.log("Estados carregados",this.estados);
        this.formCliente.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      },
      error => {});
  }
 
  updateCidades() {
    let estado_id = this.formCliente.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formCliente.controls.cidadeId.setValue(null);
      },
      error => {});
  }

  signupUser() {
    this.clienteService.insert(this.formCliente.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {
        console.error(error);
      });
  }

  async showInsertOk() {
    let alert = await this.alertCtrl.create({
      message: 'Cadastro efetuado com sucesso',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.route.navigate(['folder/Inbox']);
          }
        }
      ]
    });
    alert.present();
  }

}
