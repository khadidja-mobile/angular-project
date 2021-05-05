import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // déclarationd'une variable de type chaine de caractere
  title:string = 'Session Angular';

  // Créer un objet de type Personne
  personne:Personne = new Personne(100, 'Wick', 'John');

  // Créer un tableai
  tab:number[] = [2, 3, 5, 8, 15, 12, 10, 16, 9, 19, 17, 18, 20];

  // ajout d'une méthode
  direBonjour(){
    return "Bonjour Angular";
  }

  direSalut = () => {
    return "Salut !!";
  }

  nom='Doe';
  couleur = 'blue';

  getBackgroundColor(){ 
    return "red";
  }

  getColor(){
    return "white";
  }

  personnes:Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(200, 'Abruzzi', 'John'),
    new Personne(300, 'Doe', 'John'),
    new Personne(400, 'Wayne', 'John')
  ];
  
  tasks = [
              {
                name: 'EATING',
                status: 'doing'
              },
              {
                name: 'DRINKING',
                status: 'done'
              },
              {
                name: 'SLEEPING',
                status: 'done'
              }

            ];

getC(elt: any){ return "green"; }

constructor() { }

ngOnInit(): void {
  }

}
