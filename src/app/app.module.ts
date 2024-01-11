import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitesComponent } from './activites/activites.component';
import { ExercicesComponent } from './exercices/exercices.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitesComponent,
    ExercicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
