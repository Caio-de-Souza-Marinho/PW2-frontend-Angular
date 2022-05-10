import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso Angular';
  //template string 👇 strings definidas com crase permitem a interpolação, permitindo colocar variáveis dentro da string
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  


  constructor() {

    // console.log('Nome do produto: ', this.nomeProduto);
    // console.log('Anuncio: ', this.anuncio);
    // console.log('ID: ', this.idProduto);
    // console.log('Preço: ', this.precoProduto);
    // console.log('Promoção: ', this.promocao);






}

  ngOnInit(): void {
  }

}
