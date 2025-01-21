import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedImage: string | null = null;

openImage(imagePath: string) {
  this.selectedImage = imagePath;
}

closeImage() {
  this.selectedImage = null;
}
}
