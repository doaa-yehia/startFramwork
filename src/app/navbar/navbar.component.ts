import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('nav') nav!: ElementRef;
  // changeNavStyle():void{
  //   console.log(this.nav.nativeElement);

  //   if(window.scrollY>0){
  //     this.nav.nativeElement.classList.remove("p-4")
  //   }else{
  //     this.nav.nativeElement.classList.add("p-4")
  //   }
  // }
  @HostListener('window:scroll', ['$event']) changeNavStyle() {
    if (window.scrollY > 10) {
      this.nav.nativeElement.classList.remove("py-4")
    } else {
      this.nav.nativeElement.classList.add("py-4")
    }
  }
}
