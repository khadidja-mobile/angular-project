import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';

import { PersonneService } from '../shared/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Personne[]> {

  constructor(private personneService: PersonneService, private route: Router) {}

  // Les resolver d'angular permettent d'attendre le retour d'un observable avant d'initialiser 
  // mettre à jour un composant après une mise à jour de l'url.

  // Le Resolver 
  
  // resolve(): Observable<Personne[]> {
  //   return this.personneService.getAllPersons();
  // }
  resolve(): Observable<any> {
    return this.personneService.getAllPersons()
      .pipe(map(res => {
        console.log(res);
        return res;
      }),
        catchError(() => {
          this.route.navigate(['/error']);
          return EMPTY;
      }));
  }
}
