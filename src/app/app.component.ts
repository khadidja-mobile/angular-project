import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}

  // tableau de route
  tabs: any[] = [
    {
      title: 'home',
      path: 'home'
    },
    {
      title: 'stagiaire',
      path: 'stagiaire'
    },
    {
      title: 'adresse',
      path: 'adresse'
    },
    {
      title: 'template-form',
      path: 'template-form'
    },
    {
      title: 'reactive-form',
      path: 'reactive-form'
    },
    {
      title: 'calculette',
      path: 'calculette'
    },
    {
      title: 'correction',
      path: 'correction'
    },
    {
      title: 'correction-calculette',
      path: 'correction-calculette'
    },
    {
      title: 'commentaire',
      path: 'commentaire'
    },
    {
      title: 'correction-comment',
      path: 'correction-comment'
    },
    {
      title: 'personne',
      path: 'personne'
    },
    {
      title: 'rocket',
      path: 'rocket'
    },
    {
      title: 'Table',
      path: 'table'
    },
    {
      title: 'Adress-Form',
      path: 'address-form'
    },
    {
      title: 'Tree',
      path: 'tree'
    },
    {
      title: 'Auth',
      path: 'auth'
    },
    {
      title: 'register',
      path: 'register'
    },
    {
      title: 'profil',
      path: 'profil'
    },
    {
      title: 'Voiture',
      path: 'vehicule/voiture'
    },
    {
      title: 'Camion',
      path: 'vehicule/camion'
    },
    {
      title: 'features',
      path: 'features'
    },
    {
      title: 'developpeurs',
      path: 'developer'
    },
    
  ];

  logOut(){
    // localStorage.removeItem('isConnected');
    // this.router.navigateByUrl('/home');
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  isConnected(){
    if(Boolean(this.tokenStorageService.getToken()))
      return true;
    return false;
    // if (Boolean(localStorage.getItem('isConnected')))
    //   return true;
    // return false;
  }
}
