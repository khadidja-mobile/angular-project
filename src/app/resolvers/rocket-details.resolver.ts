import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rocket } from '../interfaces/rocket';
import { RocketService } from '../shared/rocket.service';

@Injectable({
  providedIn: 'root'
})
export class RocketDetailsResolver implements Resolve<Rocket> {

  constructor(private rocketService: RocketService, private route: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rocket> {
    let id: any = route.paramMap.get('id');
    console.log("rocket details resolver id : " + id);

    return this.rocketService.getRocket(id).pipe(map(data => {
      if(data) {
        console.log(data);
        return data;
      } else {
        console.log('redirecting');
        this.route.navigateByUrl('error', {skipLocationChange:true});
        return null;
      }
    }))

  }
}
