import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
padding: string = '25px';
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const scrollPos = window.scrollY;
    
    if (scrollPos > 50) {
      this.padding = '15px'; 
    } else {
      this.padding = '25px';
    }
}
}
