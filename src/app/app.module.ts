import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AcceuilComponent } from './main/acceuil/acceuil.component';
import { LocalisationComponent } from './main/localisation/localisation.component';
import { CompteComponent } from './main/compte/compte.component';
import { FlotteComponent } from './main/flotte/flotte.component';
import { FinanceComponent } from './main/finance/finance.component';
import { MessagerieComponent } from './main/messagerie/messagerie.component';
import { ParametreComponent } from './main/parametre/parametre.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { MainComponent } from './main/main.component';

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
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
