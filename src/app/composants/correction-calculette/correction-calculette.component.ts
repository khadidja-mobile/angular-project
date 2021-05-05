import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correction-calculette',
  templateUrl: './correction-calculette.component.html',
  styleUrls: ['./correction-calculette.component.css']
})
export class CorrectionCalculetteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1!: number; // autorise les variables sans valeur
	num2!: number;
	result!: number;
  
	sum() {
		this.result = this.num1 + this.num2;
	}

	diff() {
		this.result = this.num1 - this.num2;

	}
	mult() {
		this.result = this.num1 * this.num2;

	}
	div() {
		this.result = this.num1 / this.num2;}

}
