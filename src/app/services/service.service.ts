import { Injectable } from '@angular/core';
interface Service {
  name: string;
  description: string;
  price: number;
  hasOptions: boolean;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getServices() {
    return [
      { name: 'Variation test service', description: 'This is a placeholder', price: 200, hasOptions: true, image: '/assets/images/placeholder.png' },
      { name: 'Simple Test Service', description: 'Service description', price: 100.50, hasOptions: false, image: '/assets/images/test-service.png' },
      { name: 'Balcony', description: 'Book by room', price: 249, hasOptions: false, image: '/assets/images/balcony.png' },
      // Additional services
    ];
  }

  constructor() { }
}
