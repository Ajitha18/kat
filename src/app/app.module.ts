import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { ThingsComponent } from './things/things.component';
import { RoutingModule } from './app.routes';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { EmotionsComponent } from './emotions/emotions.component';

@NgModule({
  declarations: [AppComponent, ThingsComponent, CharactersComponent, HomeComponent, FunComponent, EmotionsComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule,
    RoutingModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
