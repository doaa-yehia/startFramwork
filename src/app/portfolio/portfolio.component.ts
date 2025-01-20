import { appConfig } from './../app.config';
import { AfterViewChecked, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { LineComponent } from "../line/line.component";

@Component({
  selector: 'app-portfolio',
  imports: [ChildComponent, LineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  @ViewChild('lightBox') lightBox!:ElementRef;

  imgUrl!:any;

  show(img:HTMLImageElement):void{
    // e.preventDefault;
    this.imgUrl=(img as HTMLElement).getAttribute("src");
 
    this.lightBox.nativeElement.classList.replace("d-none","d-flex");
    
  }
  stopPropagation(e:MouseEvent):void{
    e.stopPropagation()
  }
  closelightBox(e:MouseEvent):void{
    this.lightBox.nativeElement.classList.replace("d-flex","d-none");
  }
  
  // hashing():any{
  //  let imgEle:any=this.imgArr.map((img)=>{
  //     return img.nativeElement;
  //   }
    
  // )
  // return imgEle;
  //   // console.log(this.imgArr.forEach((img)=>{
  //   //   img.nativeElement;
  //   // }));
    
  // }
   
  
  
}
