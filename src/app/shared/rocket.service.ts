import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, repeat } from 'rxjs/operators';
import { Rocket } from '../interfaces/rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  url: string = 'http://localhost:8080/api/rockets';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  rockets: Array<Rocket> = new Array<Rocket>();

  // injection
  constructor(private http:HttpClient) { }

  // récupérer la liste
  // getAllRockets(): Observable<Rocket[]> {
  //   let API_URL = `${this.url}`;

  //   return this.http.get(API_URL, { headers: this.headers }).pipe(map((res: any) => {
  //       return res.rocketCollection || {}
  //     }),
  //     catchError(this.errorMgmt))
  // }


  getAllRockets(): Observable<Rocket[]>{
    let API_URL = `${this.url}`;
    
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
   }

  // Gère les erreurs par rapport au coté serveur
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

  // Ajouter une fusée
  addRocket(data: Rocket): Observable<Rocket> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }
  
  // Supprimer une fusée
  removeAtRocket(id: any): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL, {responseType: 'text'}).pipe(catchError(this.errorMgmt))
  }

  // détails fusée
  getRocket(id: any): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL, {headers: this.headers}).pipe(map((res: any) => {
      return res || {}
    }), //map
    catchError(this.errorMgmt)
    ) //pipe
      
  }

  editRocket(id: any, data: Rocket): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data).pipe(map((res: any) => {
      return res || {}
    }), //map
    catchError(this.errorMgmt)
    ) //pipe
  }

}
