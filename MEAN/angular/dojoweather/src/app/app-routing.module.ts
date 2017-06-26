import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from '../../src/app/seattle/seattle.component';
import { BurbankComponent } from '../../src/app/burbank/burbank.component';
import { ChicagoComponent } from '../../src/app/chicago/chicago.component';
import { SanjoseComponent } from '../../src/app/sanjose/sanjose.component';
import { WashingtonComponent } from '../../src/app/washington/washington.component';
import { DallasComponent } from '../../src/app/dallas/dallas.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: SeattleComponent},
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent},
  { path: 'sanjose', pathMatch: 'full', component: SanjoseComponent},
  { path: 'washington', pathMatch: 'full', component: WashingtonComponent},
  { path: 'dallas', pathMatch: 'full', component: DallasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
