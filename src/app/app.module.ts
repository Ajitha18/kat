import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { ThingsComponent } from './things/things.component';
import { RoutingModule } from './app.routes';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingsComponent,
    CharactersComponent,
    HomeComponent,
    FunComponent,
    EmotionsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
