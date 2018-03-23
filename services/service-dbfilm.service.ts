import { Film } from '../src/types/Film';
import { Attore } from '../src/types/Attore';
import { Sala } from '../src/types/Sala';
import { Recita } from '../src/types/Recita';

import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceDbfilmService {
  constructor(private http: HttpClient) { }

  server : string = "http://localhost:3000";

// #region Attore
  getAttori():Observable<Attore[]>{
    return this.http
      .get(this.server + "/listAttori")
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
    return this.http.put(this.server + "/ModAttore", null, options)
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
    return this.http.delete(this.server + "/delAttore" ,  options )
      .map((response: Response) =>response )
      .catch(this.handleError);
  }
  // #endregion

// #region Film
getFilm(CodAttore? : number):Observable<Film[]>{
  if(CodAttore != undefined) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('CodAttore', CodAttore.toString())
    const options = {
        headers,
        params
      };
  }
  return this.http
    .get(this.server + "/listFilm")
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
  return this.http
    .put(this.server + "/ModFilm", null, options)
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
  return this.http
    .delete(this.server + "/delFilm" ,  options )
    .map((response: Response) =>response )
    .catch(this.handleError);
}
// #endregion

// #region Sala
getSale():Observable<Sala[]>{
  return this.http
    .get(this.server + "/listSale")
    .map(res => res as Sala[]);
}

modInsSala (sala:Sala): Observable<any> {
  console.log("mod/ins codSala :"+sala.Nome);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  const params = new HttpParams()
    .set('CodSala', sala.CodSala.toString())
    .set('Nome', sala.Nome)
    .set('Posti', sala.Posti.toString())
    .set('Citta', sala.Citta);
  const options = {
      headers,
      params
    };
  return this.http.put(this.server + "/ModSala", null, options)
    .map((response: Response) => response)
    .catch(this.handleError);
}

delSala(CodSala:number): Observable<any> {
  console.log("del codSala :"+CodSala);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const params = new HttpParams()
      .set('CodSala', CodSala.toString())      ;
    const options = {
        headers,
        params
      };
  return this.http.delete(this.server + "/delSala" ,  options )
    .map((response: Response) =>response )
    .catch(this.handleError);
}
// #endregion
// #region Recita
getRecita(attore : Attore):Observable<string[]>{
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  const params = new HttpParams()
    .set('CodAttore', attore.CodAttore.toString())
  const options = {
      headers,
      params
    };
  return this.http.get(this.server + "/GetRecita", options)
    .map((response: Response) => response)
    .catch(this.handleError); 
}

updateRecita(recita : Recita[]):Observable<any>{
  let RecString = recita.map(x => "(" + x.toString() + ")", );
  console.log(RecString);
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  const params = new HttpParams()
    .set('rec', RecString.toString());
  const options = {
      headers,
      params
    };
  return this.http.put(this.server + "/updateRecita", null, options)
    .map((response: Response) => response)
    .catch(this.handleError);
}

// modInsAttore(attore:Attore): Observable<any> {
//   console.log("mod/ins codAttore :"+attore.Nome);
//   let headers = new HttpHeaders();
//   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//   const params = new HttpParams()
//     .set('CodAttore', attore.CodAttore.toString())
//     .set('Nome', attore.Nome)
//     .set('AnnoNascita', attore.AnnoNascita.toString())
//     .set('Nazionalita', attore.Nazionalita);
//   const options = {
//       headers,
//       params
//     };
//   return this.http.put(this.server + "/ModAttore", null, options)
//     .map((response: Response) => response)
//     .catch(this.handleError);
// }

// delAttore(CodAttore:number): Observable<any> {
//   console.log("del codAttore :"+CodAttore);
//     let headers = new HttpHeaders();
//     headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//     const params = new HttpParams()
//       .set('CodAttore', CodAttore.toString())      ;
//     const options = {
//         headers,
//         params
//       };
//   return this.http.delete(this.server + "/delAttore" ,  options )
//     .map((response: Response) =>response )
//     .catch(this.handleError);
// }
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
