import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent}  from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { CanActivateGuard } from '../can-activate.guards';
import { ErrorComponent } from './error/error.component';
 import {FormsComponent} from './forms/forms.component';

const routes:Routes=[

  {path:'heroes',component:HeroesComponent,canActivate:[CanActivateGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'error',component:ErrorComponent},
  {path:'register',component:FormsComponent}

];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
