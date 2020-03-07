import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoDTO } from 'src/app/models/pedido.dto';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pedido: PedidoDTO;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pedido = JSON.parse(this.activatedRoute.snapshot.paramMap.get('pedido'));
   
  }

}
