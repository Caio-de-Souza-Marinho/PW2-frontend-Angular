import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  constructor() {
    for(let item of this.listaStrings){
      console.log(item);
    }
    for(const item of this.listaNumeros){
      console.log(item);
    }
  }

  ngOnInit(): void {}
}
