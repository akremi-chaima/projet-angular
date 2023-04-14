import { Component } from '@angular/core';
import {Selfie} from "./models/selfie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookie!';
  subTitle = 'La super application';
  logoAffiche = true;

}
