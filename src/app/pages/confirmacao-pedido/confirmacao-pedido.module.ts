import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoPedidoPageRoutingModule } from './confirmacao-pedido-routing.module';

import { ConfirmacaoPedidoPage } from './confirmacao-pedido.page';
import { PedidoService } from 'src/app/services/domain/pedido.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoPedidoPageRoutingModule
  ],
  declarations: [ConfirmacaoPedidoPage],
  providers:[
    PedidoService
  ]
})
export class ConfirmacaoPedidoPageModule {}
