import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  message:string[]=[];
  constructor() { }
add(m:string){
this.message.push(m);

}
clear(){
  this.message=[];
}

}
