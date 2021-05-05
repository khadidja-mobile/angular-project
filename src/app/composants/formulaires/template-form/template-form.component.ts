import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  personnes: Array<Personne> = [];

  personne: Personne = {};

  result = "";

  pers: any;

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne() {
    //this.personnes.push({...this.personne});
    this.personnes.unshift({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personnes);
  }

  afficherPersonne() {
    if (this.personnes) {
      this.personnes.forEach(personne => {
        return this.pers = personne.nom + " " + personne.prenom;
      });
    }
  }

  afficherTouteLesPersonnes() {

    //   if(this.personnes){
    //     for(let i=0; i<this.personnes.length; i++){
    //       this.personnes[i].forEach(personne[i] => {
    //         return this.pers[i] = personne[i].nom + " " + personne[i].prenom;
    //      });
    //   }  
    //  }
  }

  supprimerPersonne(pers: Personne) {
    console.log(pers);
    let index = this.personnes.indexOf(pers);
    if (index > -1) {
      this.personnes.splice(index, 1);
    }
  }


  // direBonjour(nom: string) {
  //   this.result = nom;
  // }



  // correction 

  // jouterPersonne(myForm: NgForm) {
  //   this.personnes.unshift({ ...this.personne });
  //   // this.personne.nom = '';
  //   // this.personne.prenom = '';
  //   myForm.form.markAsPristine();
  //   myForm.form.reset();
  //   console.log(this.personnes);
  // }

  // supprimerPersonne(personne: Personne) {
  //   const index: number = this.personnes.indexOf(personne);
  //   this.personnes.splice(index, 1);
  // }

  // supprimerP(index: any) {
  //   this.personnes.splice(index, 1);
  // }


}
