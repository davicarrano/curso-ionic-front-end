import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherEnderecosPageRoutingModule } from './escolher-enderecos-routing.module';

import { EscolherEnderecosPage } from './escolher-enderecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherEnderecosPageRoutingModule
  ],
  declarations: [EscolherEnderecosPage]
})
export class EscolherEnderecosPageModule {}
