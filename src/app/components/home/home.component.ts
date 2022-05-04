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

    // function imprimeIdade(){
    //   for(var idade = 30; idade <=40; idade++){
    //     console.log('Idade dentro do for: ', idade)
    //   }
    //   console.log('Idade fora do for: ', idade)

    // }
    // imprimeIdade()

    // var a = 10;
    // let b = 20;
    // function bar() {
    //   var a = 30;
    //   let b = 40;
    //   if(true) {
    //     var a = 50;
    //     let b = 60;
    //     console.log('Variável a dentro do if', a);
    //     console.log('Variável b dentro do if', b);
    //   }
    //   console.log('Variável a dentro da funcao', a);
    //   console.log('Variável b dentro da funcao', b);
    // }
    // bar();
    // console.log('Variável a fora da função', a);
    // console.log('Variável b fora da função', b);

  //   let a = 1;
  //   function bar() {
  //     console.log('Variável a: ', a);
  //     let b = 2;
  //     if(true) {
  //       let c = 3;
  //       let a = 4;
  //       console.log('variável a dentro do if: ', a);
  //       console.log('variável b dentro do if: ', b);
  //       console.log('variável c dentro do if: ', c);
  //     }
  //     console.log('Variável a fora do if: ', a);
  //     console.log('Variável b fora do if: ', b);
  //     // console.log(c);
  //   }
  //   bar();

  // var a = 5;
  // var b = 10;
  // if(a = 5){
  //   let a = 4;
  //   var b = 1;
  //   console.log('Variável a dentro do if: ', a);
  //   console.log('Variável b dentro do if: ', b);
  // }
  // console.log('Variável a fora do if: ', a);
  // console.log('Variável a dentro do if: ', b);

//   1- A variável 'variável' está com o resultado igual a 10. A variável 'outra_variavel' está com o resultado igual a 30. Não é apresentado nenhum erro.

// 2- Trocando o var pelo let é apresentado um erro. O erro acontece pois as variáveis 'variável' e 'outra_variavel' estão sendo declaradas novamente dentro de seus escopos.

// 3-
// a. Variável a dentro do if: 50
// b. Variável b dentro do if: 60
// c. Variável a dentro da função: 50
// d. Variável b dentro da função: 40
// e. Variável a fora da função: 10
// f. Variável b fora da função: 20

// 4-
// a. Variável a: 1
// b. Variável a dentro do if: 4
// c. Variável b dentro do if: 2
// d. Variável c dentro do if: 3
// e. Variável a fora do if: 1
// f. Variável b fora do if: 2
// g. O que acontece com a variável c fora do if, se tirarmos o comentário? Por que?
// Caso o comentário seja retirado, acontecerá um erro. A variável c está declarada como let dentro do escopo do if e portanto funciona somente para esse escopo.

// 5- a. Variável a dentro do if: 4
// b. Variável b dentro do if: 1
// c. Variável a fora do if: 5
// d. Variável b fora do if: 1





}

  ngOnInit(): void {
  }

}
