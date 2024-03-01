import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ExplorerComponent } from './secondaryComponents/explorer/explorer.component';
import { HebergementsComponent } from './secondaryComponents/hebergements/hebergements.component';
import { AventuresComponent } from './secondaryComponents/aventures/aventures.component';
import { LogementComponent } from './secondaryComponents/logement/logement.component';
import { DestinationComponent } from './secondaryComponents/destination/destination.component';
import { RechercherComponent } from './secondaryComponents/rechercher/rechercher.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ExplorerComponent,
    HebergementsComponent,
    AventuresComponent,
    LogementComponent,
    DestinationComponent,
    RechercherComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
