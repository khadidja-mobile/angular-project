import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-correction-comment',
  templateUrl: './correction-comment.component.html',
  styleUrls: ['./correction-comment.component.css']
})
export class CorrectionCommentComponent implements OnInit {

  personnes: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  personneForm = this.fb.group({
    id: [null, Validators.required],
    nom: ['', [Validators.required, this.checkValidator]],
    prenom: ['', [Validators.required, this.checkValidator]],
    commentaires: this.fb.array([])
  });

  checkValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  get commentaires() {
    return this.personneForm.get('commentaires') as FormArray;
  }

  ajouterCommentaire() {
    this.commentaires.push(this.fb.group({
      titre: [''],
      contenu: [''],
      categorie: ['']
    }));
  }

  supprimerCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }

  // createCommentaire() : FormGroup {
  //   return this.fb.group({
  //     titre: ['', ],
  //     contenu: ['', ],
  //     categorie: ['', ],
  //   })
  // }

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value }); 
    this.personneForm.reset();
    this.commentaires.clear(); 
  }


}

