import {Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
selector:'[style-dir]'

})

export class MyDirective {

    constructor(private ref:ElementRef){
       this. ref.nativeElement.style.backgroundColor='red';



    }

    @HostListener('mouseenter') onMouseEnter(){
this.hightlight('green');
    }
@HostListener('mouseleave') onMouseLeave(){
this.hightlight('yellow');
}

private hightlight(color:string){
    this.ref.nativeElement.style.backgroundColor=color;

}
}