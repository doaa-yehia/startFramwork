import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { LineComponent } from "../line/line.component";

@Component({
  selector: 'app-about',
  imports: [ChildComponent, LineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
