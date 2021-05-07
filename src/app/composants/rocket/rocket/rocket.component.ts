import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket: Rocket = {};
  rockets: Array<Rocket> = new Array<Rocket>();

  constructor(private router: Router, private rocketService: RocketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.rockets = this.rocketService.getAllRockets();
    this.reloadData();
    //this.reloadResolve();
  }

  // Recharge la page apres avoir recuperer les donnees de la route
  reloadResolve() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]).then(() => {
      this.rockets = this.route.snapshot.data.routeResolver;
    });
  }

  reloadData(){
    this.rocketService.getAllRockets().subscribe(data => {
      this.rockets = data;
      console.log(data);
    })
  }

  saveRocket(){
    this.rocketService.addRocket(this.rocket).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  deleteRocket(id: any) {
    this.rocketService.removeAtRocket(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  rocketDetails(id: any) {
    this.router.navigate(['rocket-details', id]);
    
    // this.rocketService.getRocket(id).subscribe(data => {
    // console.log(data);
   // })
  }

  RocketEdit(id: any) {
    this.router.navigate(['rocket-edit', id]);
  }

}
