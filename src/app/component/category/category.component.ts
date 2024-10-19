import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ServiceService } from 'src/app/services/service.service';

interface Category {
  name: string;
  checked: boolean;
}

interface Service {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
  price: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  sendPaymentLink: boolean;
  total: number;
  quantity?:number;
}

interface Booking {
  user: string;
  appointmentDate: Date;
  appointmentTime: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  services: Service[];
  sendPaymentLink: boolean;
  total: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Service[] = [];
  filteredProducts: Service[] = [];
  selectedCategories: string[] = [];
  categories: Category[] = [
    { name: 'Furnished apartment', checked: false },
    { name: 'Unfurnished apartment', checked: false },
    { name: 'Book by room', checked: false },
    { name: 'Addon', checked: false },
    { name: 'Test', checked: false }
  ];
  addons = [
    { name: 'Test Addon 2', price: 25 },
    { name: 'Test Addon 1', price: 20 },
    { name: 'Addon 1', price: 200 },
    { name: 'Addon 2', price: 100 }
  ];
  selectedServices: Service[] = [];
  appointmentForm: FormGroup;
  bookingData: Booking = {
    user: '',
    appointmentDate: new Date(),
    appointmentTime: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    services: [],
    sendPaymentLink: true,
    total: 0
  };
  constructor(
    private allServicesService: ServiceService,
    private fb: FormBuilder,
    private cat: CategoryService,private router:Router
  ) {
    this.appointmentForm = this.fb.group({
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      pincode: [''],
      appointmentDate: [''],
      appointmentTime: [''],
    });
  }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.allServicesService.getService().subscribe(
      (products: Service[]) => {
        this.products = products.map(product => {
          return { ...product, quantity: 1 }; // Set default quantity to 1
        });
        this.filteredProducts = products;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  onCategoryChange(category: Category): void {
    category.checked
      ? this.selectedCategories.push(category.name)
      : (this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category.name
        ));
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts =
      this.selectedCategories.length === 0
        ? this.products
        : this.products.filter((product) =>
            this.selectedCategories.includes(product.category.trim())
          );
  }

  // addToCart(service: Service): void {
  //   this.selectedServices.push(service);
  //   this.cat.updateSelectedServices(this.selectedServices); // Update the selected services in CategoryService
  //   this.bookingData.services = [service];
  //   this.bookingData.services.push({ ...service, quantity: service.quantity });
  //   this.bookingData.total += service.price 
  // //  this.bookingData.total = service.price;
  // console.log('sss',this.selectedServices)
  // }

  addAddonToCart(addon: any): void {
    const addonService: Service = {
      id: 0,
      image: '',
      name: addon.name,
      category: 'Addon',
      description: '',
      price: addon.price,
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: '',
      sendPaymentLink: false,
      total: 0,
      quantity: 0
    };
    this.bookingData.services.push(addonService);
    this.bookingData.total += addon.price;
  }

  notification = '';
  showNotification = false;
  addToCart(service: Service): void {
    const existingService = this.selectedServices.find((s) => s.id === service.id);
    if (existingService) {
      existingService.quantity! += 1;
    } else {
      this.selectedServices.push({ ...service, quantity: service.quantity });
    }
    this.bookingData.services = this.selectedServices;
    this.updateTotal();
    this.cat.updateSelectedServices(this.selectedServices); // Update the selected services in CategoryService
    localStorage.setItem('selectedServices',JSON.stringify(this.selectedServices));
    console.log('sss',this.selectedServices)

    this.notification = `${service.name} has been added to the cart!`;
    this.showNotification = true;

    // Hide the notification after 3 seconds
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
  updateTotal(): void {
    this.bookingData.total = this.selectedServices.reduce(
      (acc, service) => acc + service.price * (service.quantity || 1),0
    )
  }
}