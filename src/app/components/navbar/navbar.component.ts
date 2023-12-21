import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
})
export class NavbarComponent {
  navOpen = false;
  e: any;

  toggleNav() {
    this.navOpen = !this.navOpen;
    console.log(this.navOpen);
  }

  overlayClicked(event: MouseEvent) {
    event.stopPropagation();
  }
}
