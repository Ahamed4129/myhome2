import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.phone && this.contact.message) {
      console.log('Contact Info:', this.contact);
      // Send the contact form data to the server or handle it as required
      alert('Message Sent Successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }
  categories = [
    { name: 'Furnished apartment' },
    { name: 'Unfurnished apartment' },
    { name: 'Book by room' },
    { name: 'Addon' },
    { name: 'Test' }
  ];

  addons = [
    { name: 'Test Addon 2', price: 25 },
    { name: 'Test Addon 1', price: 20 },
    { name: 'Addon 1', price: 200 },
    { name: 'Addon 2', price: 100 }
  ];

  products = [
    {
      name: 'Furnished bedroom cleaning',
      price: 799,
      category: 'Book by room',
      imageUrl: 'path-to-image-1.jpg'
    },
    {
      name: 'Unfurnished bedroom cleaning',
      price: 799,
      category: 'Book by room',
      imageUrl: 'path-to-image-2.jpg'
    },
    {
      name: 'Furnished living room cleaning',
      price: 949,
      category: 'Book by room',
      imageUrl: 'path-to-image-3.jpg'
    },
    // Add more products here
  ];
  
}
