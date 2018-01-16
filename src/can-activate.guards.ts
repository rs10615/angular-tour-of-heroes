

import {CanActivate ,Router} from '@angular/router';
import { Injectable,OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateGuard implements CanActivate,OnInit{
constructor(private r:Router){

}

ngOnInit(){
    console.log('ngOnInit lifecyle hook is called');
}

canActivate(){
//this.r.navigate(['error']);
    console.log('canactivated id called');
   return Observable.of(true).delay(1000);

}
}