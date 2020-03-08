import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})



export class PaymentPage implements OnInit {

  pedido: PedidoDTO;
  parcelas: number[] = [1,2,3,4,5,6,7,8,9,10];

  formGroupPagamento: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder:FormBuilder,
              private route: Router) { 
    this.formGroupPagamento = this.formBuilder.group({
      "@type" : ["pagamentoComBoleto", Validators.required],
      numeroDeParcelas:[1,Validators.required]
    });

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.pedido = JSON.parse(params["pedido"]);
    });
    
  }

  
  proximaEtapa(){
    this.pedido.pagamento = this.formGroupPagamento.value;

    let navigationExtras: NavigationExtras = {
      queryParams: {
          pedido: JSON.stringify(this.pedido)
          
      }
    };

    this.route.navigate(['confirmacao-pedido'],navigationExtras);
  }
}
