import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL);
  }

  exibirErro(e: any): Observable<any>{
    this.exibirMensagem('Erro!!!', 'Não foi possível realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo);
  }










}
