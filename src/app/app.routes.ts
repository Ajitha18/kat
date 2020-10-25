import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { FunComponent } from './fun/fun.component';
import { HomeComponent } from './home/home.component';
import { ThingsComponent } from './things/things.component';

const routes: Routes = [

    { path: '',   component: HomeComponent, pathMatch: 'full' },
{
    path: 'things',
    component: ThingsComponent
},
{
    path: 'characters',
    component: CharactersComponent
},
{
    path: 'fun',
    component: FunComponent
},
{
    path: 'emotions',
    component: EmotionsComponent
}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
        RouterModule
     ] 
  })
  export class RoutingModule { };