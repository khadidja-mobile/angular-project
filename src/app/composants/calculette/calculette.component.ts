import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
  nom = "";

  result ="";
  resultat! : number;
  nb1! : number;
  nb2! :number;
  
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
      //calculette.form.reset();
    }
    
  }

  // direBonjour(nom: string) {
  //      this.result = nom;
  //    }



}
