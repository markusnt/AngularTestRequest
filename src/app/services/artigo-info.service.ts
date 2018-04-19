import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Artigo } from './../models/artigo';
import { Observable } from 'rxjs/Observable';
//import { catchError } from 'rxjs/add/operator/catch';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArtigoInfoService {

// Indicando de que api vou retirar os dados
webApiUrl: string = 'http://localhost:3000/artigo';

  constructor(private http: HttpClient) { }

// Solicitando visualizar os documentos da api
  getAllArtigos() {
    // return this.http.get<Artigo[]>(this.webApiUrl).toPromise().then(res => res);
    return this.http.get<Artigo[]>(this.webApiUrl);
  }

  /* POST: add um novo artigo a database
  addArtigo( artigo: Artigo ): Observable<Artigo> {

    return this.http.post<Artigo>(this.webApiUrl, artigo, httpOptions)
      .pipe(
        catchError(this.handleError('addArtigo', artigo))
      );

  }*/

// Teste para salvar um artigo novo a database
  saveArtigos() {
    const body = JSON.stringify(Artigo);
    return this.http.post<any>(this.webApiUrl, body);
  }

  // Teste para deletar um artigo novo a database
  deleteArtigos(id: number) {
    return this.http.delete<any>(this.webApiUrl + '/' + id);
  }/*
  deleteArtigos (id: number): Observable<{}> {
    const url = `${this.webApiUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
  }*/
}
