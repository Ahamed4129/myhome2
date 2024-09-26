import { Component, Input } from '@angular/core';
interface Service {
  name: string;
  description: string;
  price: number;
  hasOptions: boolean;
  image: string;
}
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() service!: Service;

  selectOption(): void {
    console.log('Option selected for:', this.service.name);
  }

  addToCart(): void {
    console.log('Added to cart:', this.service.name);
  }
}
