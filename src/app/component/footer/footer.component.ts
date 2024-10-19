import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyInfo = {
    logo: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg',  
    name: 'CONPRG',
    slogan: 'We Create Better Environs',
    description: `Elevating cleanliness to an art form, CONPRG delivers excellence in every sweep. 
    Your sanctuary deserves nothing less. Trust CONPRG for a spotless haven, where every corner 
    sparkles with perfection. Discover the joy of pristine spaces with CONPRG - where cleanliness 
    meets satisfaction.`
  };

  contactInfo = {
    address: 'B1, Gulmohar Apartments, 35 South Boag Road, T Nagar, Chennai - 600001',
    phone: '755 009 0966',
    email: 'hello@tidytribe.in'
  };

  // Social media links
  socialLinks = [
    { name: 'Facebook', icon: 'fa fa-facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fa fa-twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'fa fa-instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'fa fa-youtube', url: 'https://youtube.com' }
  ];

  // Payment methods
  paymentMethods = [
    { name: 'Visa', imgUrl: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg' },
    { name: 'Amex', imgUrl: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg' },
    { name: 'Discover', imgUrl: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg' },
    { name: 'Stripe', imgUrl: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg' },
    { name: 'PayPal', imgUrl: 'assets/WhatsApp Image 2024-09-03 at 10.56.05 (1).jpeg' }
  ];
}
