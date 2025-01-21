import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit(event: Event): void {
    event.preventDefault(); 
  }

}
