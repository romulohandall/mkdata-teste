import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cliente} from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/mkdata-rest/api/v1/clientes';

  constructor(private http: HttpClient) {
  }

  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cliente);
  }

  atualizarCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getClientesLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  pesquisarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nome/${nome}`);
  }

  existeCPF(cpf: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cpf/${cpf}`);
  }

}
