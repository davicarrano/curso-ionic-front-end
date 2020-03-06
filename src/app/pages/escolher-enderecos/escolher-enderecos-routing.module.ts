import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherEnderecosPage } from './escolher-enderecos.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherEnderecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherEnderecosPageRoutingModule {}
