import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './admin/component/acceuil/acceuil.component';
import { CompteComponent } from './admin/component/compte/compte.component';
import { LocalisationComponent } from './admin/component/localisation/localisation.component';
import { FlotteComponent } from './admin/component/flotte/flotte.component';
import { FinanceComponent } from './admin/component/finance/finance.component';
import { MessagerieComponent } from './admin/component/messagerie/messagerie.component';
import { ParametreComponent } from './admin/component/parametre/parametre.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminComponent },
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'localisation', component: LocalisationComponent },
      { path: 'compte', component: CompteComponent },
      { path: 'flotte', component: FlotteComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'messagerie', component: MessagerieComponent },
      { path: 'parametre', component: ParametreComponent }, 
  { path: 'utilisateur', component: UtilisateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
