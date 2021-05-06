import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  reloadData() {
    throw new Error('Method not implemented.');
  }

  // url user req http
  //url: string = "http://localhost:8080/person/show";
  //url: string = "http://localhost:8080/person/";

  // L’URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:8080/person';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  personnes: Array<Personne> = new Array<Personne>();

  // injection service http client
  constructor(private http: HttpClient) {
    //this.personnes.push({nom: 'wick', prenom: 'John'});
    //this.personnes.push({nom: 'wick2', prenom: 'John2'});
  }

  // getAll() {
  //   return this.personnes;
  // }

  // recup la liste des personnes du service http

  getAllPersons() {
    //return this.http.get<Array<Personne>>(this.url + "show");
    //return this.http.get<Array<Personne>>(this.url);

    let API_URL = `${this.url}/show`;

    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.result || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  addPerson(data: Personne) {
    let API_URL = `${this.url}/save`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getPerson(id: any){
    //let API_URL = `${this.url}/getOne/${id}`;
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // removePerson(id : number){
  //   let API_URL = `${this.url}/${id}/delete`;
  //   return this.http.delete(API_URL, { headers: this.headers })
  //   .pipe(
  //     map((res: any) => {
  //       return res || {}
  //     }),
  //     catchError(this.errorMgmt)
  //   )
  // }

 // Delete student
 removePerson(id: any) {
    var API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  updatePerson(id: any, data: Personne) {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  // getAll() {
  //   return this.personnes;
  // }


  // fonction pipe() dans RxJS: Vous pouvez utiliser des pipe pour relier 
  // les opérateurs entre eux. Les pipes vous permettent de combiner 
  // plusieurs fonctions en une seule fonction.

  // La fonction pipe() prend comme arguments les fonctions que vous souhaitez 
  // combiner et renvoie une nouvelle fonction qui, lorsqu'elle est exécutée, 
  // exécute les fonctions composées dans l'ordre.

  // catchError () - L'opérateur catchError examinera la valeur Observable et fera 
  // quelque chose avec cette valeur. Si vous voulez lancer une erreur ou appeler 
  // une fonction si vous obtenez une erreur, vous pouvez le faire ici. 
  // Dans l'exemple, il appellera errorMgmt et à l'intérieur de cela, 
  // il enregistrera simplement cette chaîne.

  // CORS est un raccourci pour le partage de ressources inter-origines. 

// Il s'agit d'un mécanisme permettant d'autoriser ou de restreindre les 

// ressources demandées sur un serveur Web en fonction de l'endroit où la 

// requête HTTP a été lancée.
}
