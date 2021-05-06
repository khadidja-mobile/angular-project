// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-comment',
//   templateUrl: './user-comment.component.html',
//   styleUrls: ['./user-comment.component.css']
// })
// export class UserCommentComponent implements OnInit {

//   //@ViewChild('el') span!:ElementRef;

//   users: any = [];

//   userCommentForm = this.fb.group({
//     id: [null, [Validators.required]],
//     nom: ['', [Validators.required, this.checkValidator]],
//     prenom: ['', [Validators.required, this.checkValidator]],
//     commentaires: this.fb.array([])
//   })
  

//   checkValidator(control: FormControl) {
//     let str: string = control.value;
//     let regex = /^[A-Z].*$/;
//     if (regex.test(str)) {
//       return null;
//     } else {
//       return { erreur: 'non valide' };
//     }
//   }

//   get commentaires(){
//     return this.userCommentForm.get('commentaires') as FormArray;
//   }

//   get commentaire() {
//     return this.userCommentForm.get('commentaire') as FormGroup;
//     //console.log(this.userCommentForm.get('commentaire') as FormGroup);
//   }

//   ajouterCommentaire(){
//     this.commentaires.push(this.fb.group({
//       titre: [''],
//       contenu: [''],
//       categorie: ['']
//     }));
    

//     console.log(this.commentaires.push(this.fb.control(''))); // undefined
//   }

//   supprimerCommentaire(i: number){
//     this.commentaires.removeAt(i);
//   }

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {

//   }

//   fetchAll() {
//     this.users.push({ ...this.userCommentForm.value });
//     //this.span.nativeElement.setAttribute("hidden", true);
//     // Affiche toute la form
//     console.log(this.userCommentForm.value); // objet
//     // Affiche seulement la valeur de nom
//     console.log(this.userCommentForm.controls.nom.value); // nom
//     console.log(this.userCommentForm.controls.commentaires.value); // tableau de string
//     //ou
//     console.log(this.userCommentForm.get('nom')?.value);
//     // vide les champs du formulaire userCommentForm
//     this.userCommentForm.reset();
//   }


// }
