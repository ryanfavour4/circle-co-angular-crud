import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeroComponent } from './layouts/hero/hero.component';
import { OurcustomersComponent } from './layouts/ourcustomers/ourcustomers.component';
import { OurpromiseComponent } from './layouts/ourpromise/ourpromise.component';
import { AwardsComponent } from './layouts/awards/awards.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    ButtonComponent,
    HeroComponent,
    OurcustomersComponent,
    OurpromiseComponent,
    AwardsComponent,
  ],
})
export class HomeComponent {
  iconFill = 'currentColor'; // Default to current text color
  primaryColor = '#f07bff'; // Your primary color

  selectIcon() {
    this.iconFill =
      this.iconFill == this.primaryColor ? 'currentColor' : this.primaryColor;
  }

  logIt(e: any) {
    console.log(e);
  }
}
