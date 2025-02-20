import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/component/header/header.component';
import { SideBarComponent } from './admin/component/side-bar/side-bar.component';
import { AcceuilComponent } from './admin/component/acceuil/acceuil.component';
import { LocalisationComponent } from './admin/component/localisation/localisation.component';
import { CompteComponent } from './admin/component/compte/compte.component';
import { FlotteComponent } from './admin/component/flotte/flotte.component';
import { FinanceComponent } from './admin/component/finance/finance.component';
import { MessagerieComponent } from './admin/component/messagerie/messagerie.component';
import { ParametreComponent } from './admin/component/parametre/parametre.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AcceuilComponent,
    LocalisationComponent,
    CompteComponent,
    FlotteComponent,
    FinanceComponent,
    MessagerieComponent,
    ParametreComponent,
    AuthentificationComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UtilisateurComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
