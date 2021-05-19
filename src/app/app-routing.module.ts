import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ErrorComponent } from './composants/error/error.component';
import { CorrectionComponent } from './composants/correction/correction.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { CorrectionCalculetteComponent } from './composants/correction-calculette/correction-calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { CommentaireComponent } from './composants/formulaires/commentaire/commentaire.component';
import { CorrectionCommentComponent } from './composants/formulaires/correction-comment/correction-comment.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonResolver } from './resolvers/person.resolver';
import { PersonDetailsResolver } from './resolvers/person-details.resolver';
import { RocketComponent } from './composants/rocket/rocket/rocket.component';
import { RocketResolver } from './resolvers/rocket.resolver';
import { RocketDetailsComponent } from './composants/rocket/rocket-details/rocket-details.component';
import { RocketDetailsResolver } from './resolvers/rocket-details.resolver';
import { RocketEditComponent } from './composants/rocket/rocket-edit/rocket-edit.component';
import { TableComponent } from './composants/materials/table/table.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { AuthComponent } from './composants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { LeaveGuard } from './guards/leave.guard';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';

// import { UserCommentComponent } from './composants/user-comment/user-comment.component';

const routes: Routes = [
  //http://localhost:4200/
  {path: 'home', component: HomeComponent },
  //http://localhost:4200/stagiaire
  {path: 'stagiaire', component: StagiaireComponent },
  //http://localhost:4200/stagiaire/nom/prenom
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
   //http://localhost:4200/stagiaire/id
  {path: 'stagiaire/:id', component: StagiaireComponent },

   //http://localhost:4200/template-form
   {path: 'template-form', component: TemplateFormComponent, canDeactivate:[LeaveGuard] },

    //http://localhost:4200/reactive-form
   {path: 'reactive-form', component: ReactiveFormComponent },

   //http://localhost:4200/commentaire
   {path: 'commentaire', component: CommentaireComponent },

    //http://localhost:4200/user-comment
   // {path: 'user-comment', component: UserCommentComponent },
    
  //http://localhost:4200/adresse
  {path: 'adresse', component: AdresseComponent },
  //http://localhost:4200/adresse/email/tel
  {path: 'adresse/:email/:tel', component: AdresseComponent },
  //http://localhost:4200/adresse/position
  {path: 'adresse/:position', component: AdresseComponent },
  //http://localhost:4200/adresse/email/tel
  {path: 'adresse/:ville/:codepostal', component: AdresseComponent },
   //http://localhost:4200/calculette
   {path: 'calculette', component: CalculetteComponent },
  //http://localhost:4200/correction
  {path: 'correction', component: CorrectionComponent },
  //http://localhost:4200/correction-calculette
  {path: 'correction-calculette', component: CorrectionCalculetteComponent },

 //http://localhost:4200/correction-calculette
 {path: 'correction-comment', component: CorrectionCommentComponent },

//http://localhost:4200/personne
//{path: 'personne', component: PersonneComponent, resolve: { routeResolver: PersonResolver } },
 // On associe un resolver a la route /personne
 { path: 'person', runGuardsAndResolvers: 'always', component: PersonneComponent, 
  resolve: { routeResolver: PersonResolver },
  canActivate: [AuthGuard]},

//http://localhost:4200/details/:id
{path: 'details/:id', component: PersonneDetailsComponent, resolve: { personne: PersonDetailsResolver } },

// localhost:4200/edit/:id
//{ path: 'edit/:id', component: PersonneEditComponent },

//http://localhost:4200/rocket
{ path: 'rocket', component: RocketComponent, resolve: { routeResolver: RocketResolver }  },

//http://localhost:4200/rocket-details/:id
{ path: 'rocket-details/:id', component: RocketDetailsComponent, resolve: { rocket: RocketDetailsResolver }  },

//http://localhost:4200/rocket-edit/:id
{ path: 'rocket-edit/:id', component: RocketEditComponent  },

{ path: 'table', component: TableComponent  },
{ path: 'address-form', component: AddressFormComponent  },
{ path: 'tree', component:  TreeComponent },
// Se connecter
{ path: 'auth', component:  AuthComponent },
// Register
{ path: 'register', component:  RegisterComponent },
// Profil
{ path: 'profil', component:  ProfileComponent },


// Vehicules : chargement des routes de sous-modules au démarrage de l'app
// { path: 'vehicule', children: [
//     { path: 'camion', component: CamionComponent  },
//     { path: 'voiture', component: VoitureComponent  },
//     { path: '', redirectTo: 'camion', pathMatch: 'full'  },
//   ]
// },

// lazy loading suelement à l'appel des routes
  // L’avantage de ce mécanisme se situe évidemment au niveau des performances, puisque 
  // l’on va pouvoir proposer un affichage de l’application beaucoup plus rapidement 
  // en ne chargeant que la partie nécessaire, et en déférrant le chargement des autres parties.
{path: 'vehicule', loadChildren: () => import('./modules/vehicule/vehicule.module')
  .then(m => m.VehiculeModule) },


  //http://localhost:4200/features
  {path: 'features', component: FeaturesComponent},

    //http://localhost:4200/developers
    {path: 'developer', component: DeveloperComponent},

  //http://localhost:4200/error
  {path: 'error', component: ErrorComponent},
  // pathMatch = "full" signifie que tout chemin d'url doit correspondre
  {path: '', redirectTo : '/home', pathMatch: 'full' },
  // On affichera error.component en cas de chemin inexistant 
  {path: '**', redirectTo : '/error'},
];  // déclarer les routes

@NgModule({
  // { enableTracing: true } : tracer tout
  //imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  // PreloadAllModules permet de charger tous les modules sans attendre qu’ils soient visités. 
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [PersonResolver, PersonDetailsResolver, RocketResolver, RocketDetailsResolver]
})
export class AppRoutingModule { }
