import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from 'src/app/models/Categoria.dto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  categorias : CategoriaDTO[];

  constructor(public categoriaService: CategoriaService) { 

  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response=>{
      this.categorias = response;
    },erro=>{
      console.error(erro);
    })
  }

}
