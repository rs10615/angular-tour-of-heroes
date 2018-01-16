import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import {MyDirective} from  './attributedir.directive';
import { CanActivateGuard } from '../can-activate.guards';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,MyDirective, ErrorComponent, FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
InMemoryDataService,{dataEncapsulation:false}

    ),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService, MessageService,CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
