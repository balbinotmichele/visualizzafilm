import { Proiezione } from '../src/types/Proiezione';
import { Recita } from '../src/types/Recita';
import { Film } from '../src/types/Film';
import { Attore } from '../src/types/Attore';
import { Sala } from '../src/types/Sala';

import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ServiceDbfilmService {
  constructor(private http: HttpClient) { }
// #region Attore
  getAttori():Observable<Attore[]>{
    return this.http
      .get("http://localhost:3000/listAttori")
      .map(res => res as Attore[]  );
  }

  modInsAttore(attore:Attore): Observable<any> {
    console.log("mod/ins codAttore :"+attore.Nome);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('CodAttore', attore.CodAttore.toString())
      .set('Nome', attore.Nome)
      .set('AnnoNascita', attore.AnnoNascita.toString())
      .set('Nazionalita', attore.Nazionalita);
    const options = {
        headers,
        params
      };
    return this.http.put("http://localhost:3000/ModAttore", null, options)
      .map((response: Response) => response)
      .catch(this.handleError);
  }

  delAttore(CodAttore:number): Observable<any> {
    console.log("del codAttore :"+CodAttore);
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const params = new HttpParams()
        .set('CodAttore', CodAttore.toString())      ;
      const options = {
          headers,
          params
        };
    return this.http.delete("http://localhost:3000/delAttore" ,  options )
      .map((response: Response) =>response )
      .catch(this.handleError);
  }
  // #endregion

// #region Film
getFilm():Observable<Film[]>{
  return this.http
    .get("http://localhost:3000/listFilm")
    .map(res => res as Film[]  );
}

modInsFilm(film:Film): Observable<any> {
  console.log("mod/ins codFilm :"+ film.CodFilm);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  const params = new HttpParams()
    .set('CodFilm', film.CodFilm.toString())
    .set('Titolo', film.Titolo)
    .set('AnnoProduzione', film.AnnoProduzione.toString())
    .set('Nazionalita', film.Nazionalita)
    .set('Regista', film.Regista)
    .set('Genere', film.Genere)
  const options = {
      headers,
      params
    };
  return this.http.put("http://localhost:3000/ModFilm", null, options)
    .map((response: Response) => response)
    .catch(this.handleError);
}

delFilm(CodFilm:number): Observable<any> {
  console.log("del codFilm :"+CodFilm);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('CodFilm',   CodFilm.toString())      ;
    const options = {
        headers,
        params
      };
  return this.http.delete("http://localhost:3000/delFilm" ,  options )
    .map((response: Response) =>response )
    .catch(this.handleError);
}
// #endregion

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
