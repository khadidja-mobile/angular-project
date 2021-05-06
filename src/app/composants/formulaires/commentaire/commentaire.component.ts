import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  users: any = [];
  //commentaire: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // nom de mon formulaire de type reactive // utilisation formGroup
  commentaireForm = this.fb.group({
    nm: ['', [Validators.required, this.firstLetterUpperCaseValidator]],
    pr: ['', [Validators.required, this.firstLetterUpperCaseValidator]],
    // commentaire: this.fb.group({
    //   titre: ['', [Validators.required]],
    //   contenu: ['', [Validators.required]],
    //   categorie: ['', [Validators.required]]
    // }),

    commentaires: this.fb.array([])
  })

  firstLetterUpperCaseValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  afficher(){
    console.log(this.commentaireForm.value);
    //console.log(this.commentaireForm.get('nm')?.value);
    console.log(this.commentaireForm.controls.nm.value);

    this.users.push({ ...this.commentaireForm.value  });

    this.commentaireForm.reset();
    this.commentaires.clear(); 
  }

  // retourner la liste des commentaires
  get commentaires(){
    return this.commentaireForm.get('commentaires') as FormArray;
  }

  // ajouter un commentaire
  ajouterCommentaire(){
    //this.commentaires.push(this.fb.control('')); //
    this.commentaires.push(this.fb.group({
      titre: ['', [Validators.required]],
      contenu: ['', [Validators.required]],
      categorie: ['', [Validators.required]]
    })
    );
  }

  // ajouter un commentaire
  // ajouterCommentaires(){
  //   this.commentaires.push({ ...this.commentaireForm.value  });
  //   console.log(this.commentaireForm.controls.commentaire.value);
  // }

  // récupérer le commentaire
  get comment(){
    return this.commentaireForm.get('commentaire') as FormGroup;
  }

  // supprimer un commentaire
  supprimerCommentaire(i: number){
    this.commentaires.removeAt(i);
  }

  
}
