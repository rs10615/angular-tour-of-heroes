import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {catchError,map,tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class HeroService {
private heroesUrl="api/heroes";
  constructor(private http:HttpClient,private messageService:MessageService) { }
getHeroes():Observable<Hero[]>{
  //todo :send the message _After_fetching the heroes
this.messageService.add('HeroService:fetched heroes');
  return this.http.get<Hero[]>(this.heroesUrl)
  .pipe(
    tap(heroes=>this.log('fetched heroes')),
    catchError(this.handleError('getHeroes',[]))
  );
  
//return of(HEROES);
}
  
getHero(id:number):Observable<Hero>{

  console.log(`now fetching hero ${this.heroesUrl}/${id}`)
const url=`${this.heroesUrl}/${id}`
console.log(this.heroesUrl);
//return of(HEROES.find(hero=>hero.id==id));
return this.http.get<Hero>(url)
.pipe(
  tap(_=>this.log(`fetched hero id=${id}`)),
  catchError(this.handleError<Hero>(`getHero id=${id}`))
);
  

}

private log(message:string){
  this.messageService.add('Hero Service:'+message);
}
private handleError<T>(operation='operation',result?:T){

  return (error:any):Observable<T>=>{

  console.error(error);
this.log(`${operation}failed:${error.message}`);  
  
return of(result as T);


};
}
updateHero(hero:Hero):Observable<any>{
  console.log(`update hero method is executed`+this.http.put(this.heroesUrl,hero,httpOptions));
return this.http.put(this.heroesUrl,hero,httpOptions)
.pipe(

  tap(_=>this.log(`updated hero id =${hero.id}`)),
  catchError(this.handleError<any>(`updateHero`))
);

}
addHero(hero:Hero):Observable<Hero>{
return this.http.post<Hero>(this.heroesUrl,hero,httpOptions)
.pipe(
  tap((hero:Hero)=>this.log(`added hero w/ id=${hero.id}`)
,
catchError(this.handleError<Hero>('addHero'))
)
);
}
deleteHero(hero:Hero|number):Observable<Hero>{
const id= typeof hero==='number'?hero:hero.id;
const url=`${this.heroesUrl}/${id}`
console.log('---------------delete called----');
return this.http.delete<Hero>(url,httpOptions)
.pipe(
tap(_=>this.log(`deleted hero id=${id}`))  
,
catchError(this.handleError<Hero>('deleteHero'))
);

}
/*  
GET heroes whose name contains search term!
*/
searchHeroes(term:string):Observable<Hero[]>{
if(!term.trim()){
//if not search term ,return empty hero array
  return of([]);
}
return this.http.get<Hero[]>(`api/heroes/?name=${term}`)
.pipe(
  tap(_=>this.log(`found heroes matching "${term}"`)),
  catchError(this.handleError<Hero[]>(`searchHeroes`,[]))
);
}

}