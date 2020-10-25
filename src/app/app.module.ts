import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { ThingsComponent } from './things/things.component';
import { RoutingModule } from './app.routes';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [AppComponent, ThingsComponent, CharactersComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule,
    RoutingModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
