import { Injectable } from '@angular/core';
interface Category {
  name: string;
  checked: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Category[] {
    return [
      { name: 'Furnished apartment', checked: false },
      { name: 'Unfurnished apartment', checked: false },
      { name: 'Book by room', checked: false },
      { name: 'Addon', checked: false },
      { name: 'Test', checked: false }
    ];
  }

  constructor() { }
}
