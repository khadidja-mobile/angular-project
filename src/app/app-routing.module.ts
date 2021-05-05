import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ErrorComponent } from './composants/error/error.component';
import { CorrectionComponent } from './composants/correction/correction.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';

const routes: Routes = [
  //http://localhost:4200/
  {path: 'home', component: HomeComponent },
  //http://localhost:4200/stagiaire
  {path: 'stagiaire', component: StagiaireComponent },
  //http://localhost:4200/stagiaire/nom/prenom
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
   //http://localhost:4200/stagiaire/id
  {path: 'stagiaire/:id', component: StagiaireComponent },

   //http://localhost:4200/stagiaire/id
   {path: 'template-form', component: TemplateFormComponent },


  //http://localhost:4200/adresse
  {path: 'adresse', component: AdresseComponent },
  //http://localhost:4200/adresse/email/tel
  {path: 'adresse/:email/:tel', component: AdresseComponent },
  //http://localhost:4200/adresse/position
  {path: 'adresse/:position', component: AdresseComponent },
  //http://localhost:4200/adresse/email/tel
  {path: 'adresse/:ville/:codepostal', component: AdresseComponent },
  //http://localhost:4200/correction
  {path: 'correction', component: CorrectionComponent },

  //http://localhost:4200/calculette
  {path: 'calculette', component: CalculetteComponent },

  //http://localhost:4200/error
  {path: 'error', component: ErrorComponent},
  // pathMatch = "full" signifie que tout chemin d'url doit correspondre
  {path: '', redirectTo : '/home', pathMatch: 'full' },
  // On affichera error.component en cas de chemin inexistant 
  {path: '**', redirectTo : '/error'},
];  // déclarer les routes

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
