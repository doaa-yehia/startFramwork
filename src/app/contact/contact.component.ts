import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LineComponent } from '../line/line.component';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  imports: [ChildComponent,LineComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 @ViewChild('unLabel') uNameLable!:ElementRef;
//  @ViewChild('uaInput') uNameInput!:ElementRef;

 showLable(e:any,ele:HTMLLabelElement):void{
  if (!(e.target.value==="")) {
    ele.classList.remove("transition");
  }else  {
    ele.classList.add("transition");
  }
  
 }
}
