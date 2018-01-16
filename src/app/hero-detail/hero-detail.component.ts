import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero;
  constructor(private route:ActivatedRoute
  ,
  private heroService:HeroService,
  private location:Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
getHero():void{
const id=+this.route.snapshot.paramMap
.get('id');
console.log("hero detail component log-"+id);

this.heroService.getHero(id)
.subscribe(hero=>this.hero=hero);

}
goBack():void{

  this.location.back();
}

save():void{
  console.log(`needs to save this hero `+this.hero.name+","+this.hero.id)
this.heroService
.updateHero(this.hero)
.subscribe(()=>this.goBack());


}

}
