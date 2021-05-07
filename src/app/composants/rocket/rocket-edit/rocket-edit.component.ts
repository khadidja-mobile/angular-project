import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket-edit',
  templateUrl: './rocket-edit.component.html',
  styleUrls: ['./rocket-edit.component.css']
})
export class RocketEditComponent implements OnInit {

    id!: number;
    rocket: Rocket = {};

  constructor(private rocketService: RocketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rocketService.getRocket(this.id).subscribe(data => { // récupérer la fusée
      console.log("ngOnInit : " + data);
      this.rocket = data;
    })
    
  }

  editRocket(){
    this.rocketService.editRocket(this.id, this.rocket).subscribe(data => {
      console.log("edit rocket yes " + data);
    })
    this.router.navigateByUrl('rocket');
  }

}
