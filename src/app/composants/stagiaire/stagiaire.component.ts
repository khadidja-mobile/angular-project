import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any; // type poubelle
  prenom: any;
  id: any;

  // 
  constructor( private route:ActivatedRoute   ) { } //injection de dépendance
    
  // méthode qui sera exécuté quand Angular aura fini d'initialiser le composant 
  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    // 2 formes de param de req

    // chemin/nom/prenom
    // 2 man diff de recup ces val

    // paramMap pour /chemin/John/Doe

    // Solution avec les snapshots (instantané)

    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + " " + this.prenom);

    // Solution avec les observables

    // La méthode subscribe prend en param l'observateur (bloc code) qui recevra les valeurs emises par l'observable

    this.route.paramMap.subscribe(  // observable 

        // observeurs
        res => {
          this.nom = res.get('nom');
          this.prenom = res.get('prenom');
          console.log(this.nom + " " + this.prenom);
        });



    // queryParams pour /chemin?nom=doe&prenom=john -> snapshot
    // queryParamMap pour /chemin?nom=doe&prenom=john -> observable
    
    //http://localhost:4200/stagiaire?nom=doe&prenom=john
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + " " + this.prenom);

  }

}
