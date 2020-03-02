import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/app/models/Produto.dto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  categoria_escolhida: string;
  idCategoria: string;
  produtos: ProdutoDTO[];
  constructor(public produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
                this.categoria_escolhida = this.activatedRoute.snapshot.paramMap.get('cat');
                this.idCategoria = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {    
    this.produtoService.findByIdCategoria(this.idCategoria).subscribe(response =>{
      this.produtos = response;
    },erro=>{
      console.error(erro);
    },()=>{
      console.log('Terminou buscar produtos!'); 
    })
  }

  carregarProdutoDetalhe(produto: ProdutoDTO){
    let produto_texto: string = JSON.stringify(produto);
    this.route.navigate([`produto-detalhe/${produto_texto}`]);
  }

}
