import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDTO } from 'src/app/models/Produto.dto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})
export class ProdutoDetalhePage implements OnInit {

  quantidade: number;
  produto: ProdutoDTO;
  constructor(private activatedRoute: ActivatedRoute,
              private cartService: CartService,
              private route: Router) {
    this.produto = JSON.parse(this.activatedRoute.snapshot.paramMap.get('produto'));
   }

  ngOnInit() {
  }

  adicionarCarrinhoCompras(){
    this.cartService.addProduto(this.quantidade, this.produto);
    this.route.navigate(['cart']);
  }

}
