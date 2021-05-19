import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { RocketComponent } from './composants/rocket/rocket/rocket.component';
import { RocketDetailsComponent } from './composants/rocket/rocket-details/rocket-details.component';
import { RocketEditComponent } from './composants/rocket/rocket-edit/rocket-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap.module';
import { MaterialModule } from './shared/modules/material.module';
import { TableComponent } from './composants/materials/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './composants/auth/auth.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { RegisterComponent } from './composants/register/register.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { FeatureCardComponent } from './composants/interactions/feature-card/feature-card.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';
import { SkillComponent } from './composants/interactions/exercices/skill/skill.component';

//import { UserCommentComponent } from './composants/user-comment/user-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    CorrectionComponent, 
    ErrorComponent, TemplateFormComponent, CalculetteComponent, CorrectionCalculetteComponent, 
    ReactiveFormComponent, CommentaireComponent, CorrectionCommentComponent, PersonneComponent, PersonneDetailsComponent, RocketComponent, RocketDetailsComponent, RocketEditComponent, TableComponent, AddressFormComponent, TreeComponent, AuthComponent, ProfileComponent, RegisterComponent, FeatureCardComponent, FeaturesComponent, DeveloperComponent, SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MaterialModule,
    //VehiculeModule,
  ],
  providers: [PersonneService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

    console.log("App-module");

  }
}
