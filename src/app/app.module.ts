import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { CorrectionComponent } from './composants/correction/correction.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { CorrectionCalculetteComponent } from './composants/correction-calculette/correction-calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { CommentaireComponent } from './composants/formulaires/commentaire/commentaire.component';
import { CorrectionCommentComponent } from './composants/formulaires/correction-comment/correction-comment.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneService } from './shared/personne.service';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';

//import { UserCommentComponent } from './composants/user-comment/user-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    CorrectionComponent, 
    ErrorComponent, TemplateFormComponent, CalculetteComponent, CorrectionCalculetteComponent, 
    ReactiveFormComponent, CommentaireComponent, CorrectionCommentComponent, PersonneComponent, PersonneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
