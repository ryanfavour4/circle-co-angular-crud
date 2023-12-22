import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ButtonComponent, HeroComponent, NavbarComponent],
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
