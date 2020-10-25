import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ThingsComponent } from './things/things.component';

const routes: Routes = [

    // { path: '',   component: AppComponent, pathMatch: 'full' },
{
    path: 'things',
    component: ThingsComponent,
    data: { value: 'child'}
},
{
    path: 'characters',
    component: CharactersComponent,
    data: { value: 'child'}
}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
        RouterModule
     ] 
  })
  export class RoutingModule { };