import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
rForm:FormGroup;
post:any;
description:string='';
name:string='';
titleAlert:string='this field is required';
heroes:Hero[];

constructor(private fb:FormBuilder,private heroService:HeroService) { 
this.rForm=fb.group({
'name':[null,Validators.required],
'description':[null,Validators.compose([Validators.minLength(30),Validators.maxLength(500)])],
'validate':''

});

}

  ngOnInit() {
this.rForm.get('validate').valueChanges
.subscribe(

  (validate)=>{
if(validate=='1'){
  this.rForm.get('name').setValidators([Validators.required,Validators.minLength(3)]);
  this.titleAlert='you need to specify at least 3 characters';
}else{
  this.rForm.get('name').setValidators(Validators.required);
}
this.rForm.get('name').updateValueAndValidity();
  }
);

  }

addPost(post){
this.description=post.description;
this.name=post.name;

}
addHero(name:string):void{
name=name.trim();
console.log('new hero tring to be added'+name);
if(!name){
  return;
}
  this.heroService.addHero({name }as Hero)
  .subscribe(hero=>{
    this.heroes.push(hero)
  });
}

}






