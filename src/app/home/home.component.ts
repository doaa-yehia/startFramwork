import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { LineComponent } from "../line/line.component";

@Component({
  selector: 'app-home',
  imports: [ChildComponent, LineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
