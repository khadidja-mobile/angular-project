import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  email: any;
  tel: any;
  position: any;
  lat: any;
  long:any;
  ville: any;
  codepostal: any;

  nom = 'Wick';
  prenom = 'John';

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( res => {
        this.email = res.get('email');
        this.tel = res.get('tel');
        console.log(this.email + " " + this.tel);
      });

    //http://localhost:4200/adresse?email=doe@gmail.com&tel=0601020304
    this.email = this.route.snapshot.queryParams.email;
    this.tel = this.route.snapshot.queryParams.tel;
    console.log(this.email + " " + this.tel);

    this.lat = "43.710175";
    this.long = "7.261953";

    this.position = this.route.snapshot.params.position;
    this.position = this.lat + " " + this.long;

    this.route.paramMap.subscribe( res => {
      this.ville = res.get('ville');
      this.codepostal = res.get('codepostal');
      console.log(this.ville + " " + this.codepostal);
    });

  }

  gotoStagiaire() {
    //this.router.navigateByUrl("/stagiaire/" + this.nom + "/" + this.prenom);

    this.router.navigate(['/stagiaire', this.nom, this.prenom]);
  }

  

}
