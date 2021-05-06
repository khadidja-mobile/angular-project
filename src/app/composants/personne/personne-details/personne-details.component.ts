import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/classes/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: any;
  personne!: any;
  //id!: number;
  //personne!: Personne;

  constructor(private route: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.personneService.getPerson(this.id).subscribe(data => {
      this.personne = data;
      //this.personne = data.result[0];

      console.log(data);
      console.log(data.result[0]);
    })

    // this.personneService.removePerson(this.id).subscribe(data => {
    //   this.personne.removeAt( data.result[0].id );
    // })
  }


  updatePerson(id: any, data: Personne){
 
    this.personneService.updatePerson(id, data).subscribe(data => {

      data = this.personne;
      console.log(data);
      //this.reloadData();
    })
  }

}
