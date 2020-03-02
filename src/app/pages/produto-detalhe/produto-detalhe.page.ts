import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoDTO } from 'src/app/models/Produto.dto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})
export class ProdutoDetalhePage implements OnInit {

  quantidade: number;
  produto: ProdutoDTO;
  constructor(private activatedRoute: ActivatedRoute) {
    this.produto = JSON.parse(this.activatedRoute.snapshot.paramMap.get('produto'));
   }

  ngOnInit() {
  }

  adicionarCarrinhoCompras(){
    
  }

}
