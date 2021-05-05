import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { CorrectionComponent } from './composants/correction/correction.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { CorrectionCalculetteComponent } from './composants/correction-calculette/correction-calculette.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    CorrectionComponent, 
    ErrorComponent, TemplateFormComponent, CalculetteComponent, CorrectionCalculetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
