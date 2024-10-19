import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;
  
  // Example categories for the dropdown
  categories = [
    { name: 'Furnished Apartment' },
    { name: 'Unfurnished Apartment' },
    { name: 'Book by Room' },
    { name: 'Addons' }
  ];

  constructor(private route:Router){}
  onChangeMenu(routeLink: string) {
    // if([null,'null',undefined,'undefined',NaN,'NaN',''].indexOf(localStorage.getItem('loginToken')) !== -1) {
    //   this.route.navigate(['/login']);
    // } else {
    //   this.route.navigate([routeLink]);
    // }
    this.route.navigate([routeLink]);
    }
  
  selectedCategory: string | null = null;

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Handle category selection
  selectCategory(category: { name: string }) {
    this.selectedCategory = category.name; // Store the selected category
    this.isDropdownOpen = false;  // Close the dropdown after selecting
  }
}
