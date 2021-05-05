import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  result = "";
  nom = "";
  resultat = 0;
  nb1 = 0;
  nb2 = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

 
  additionner(nb1: number, nb2: number) {
    //let nb1 = nb1.value;
     // this.resultat = parseInt(nb1) + parseInt(nb2);
     this.resultat = nb1 + nb2;
   }

   soustraire(nb1: number, nb2: number) {
     this.resultat = nb1 - nb2;
   }

   multiplier(nb1: number, nb2: number) {
    this.resultat = nb1 * nb2;
  }

  diviser(nb1: number, nb2: number) {
    if(nb2 != 0){
      this.resultat = nb1 / nb2;
      this.result = "";
    }
    else {
      this.result = "Division par zéro interdite";
      // this.resultat = ;
    }
    
  }

  // direBonjour(nom: string) {
  //      this.result = nom;
  //    }



}
