import { Injectable } from '@angular/core';
interface Addon {
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class AddonService {
  getAddons(): Addon[] {
    return [
      { name: 'Test Addon 2', price: 25 },
      { name: 'Test Addon 1', price: 20 },
      { name: 'Addon 1', price: 200 },
      { name: 'Addon 1', price: 100 }
    ];
  }
  constructor() { }
}
