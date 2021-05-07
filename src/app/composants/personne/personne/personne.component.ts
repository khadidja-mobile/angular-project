import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};

  personnes: Array<Personne> = new Array<Personne>();

  constructor(private router: Router, private personneService: PersonneService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //this.personnes = this.personneService.getAll();

    // this.reloadData();

    this.reloadResolve();

  

  }

    // Recharge la page apres avoir recuperer les donnees de la route
    reloadResolve() {
      this.router.navigated = false;
      this.router.navigate([this.router.url]).then(() => {
        this.personnes = this.route.snapshot.data.routeResolver;
      });
    }

  reloadData() {
    // this.personneService.getAllPersons().subscribe(data => {
    //   this.personnes = data;
    // })

    // Utilisation du resolver PersonResolver
    this.route.data.subscribe(data => {
      console.log('Check route resolver data')
      console.log(data);
      this.personnes = data.routeResolver;
    })
  }

  savePerson(){
    this.personneService.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  personDetails(id: any){
    this.router.navigate(['details', id]);
  }

  addPerson(){
    this.personneService.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  removePerson(id: any){
    this.personneService.removePerson(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  // deletePerson(id: any) {
  //   this.personneService.deletePerson(id).subscribe(data => {
  //     console.log(data);
  //     this.reloadData();
  //   })
  // }

}
