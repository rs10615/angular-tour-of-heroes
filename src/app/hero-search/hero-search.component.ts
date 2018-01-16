import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Hero} from '../hero';
import {Subject } from 'rxjs/Subject';
import { HeroService } from '../hero.service';
import { debounce } from 'rxjs/operators/debounce';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$:Observable<Hero[]>;
 private searchTerms=new Subject<string>();
 
  constructor(private heroService:HeroService) { }
search(term:string):void{
  this.searchTerms.next(term);
}
  ngOnInit() {
    this.heroes$=this.searchTerms.pipe(
    //wait for 300ms after each keystroke before considering the term
  debounceTime(300),
//ignoring new term if same as previous term
distinctUntilChanged(),
//switch to new search observable each tym the 
//the term changes
switchMap((term:string)=>this.heroService.searchHeroes(term)
),

  );
  }

}
