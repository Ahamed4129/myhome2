// addon-sidebar.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import {
  IPayPalConfig,
  ICreateOrderRequest,
  ITransactionItem,
} from 'ngx-paypal';

@Component({
  selector: 'app-addon-sidebar',
  templateUrl: './addon-sidebar.component.html',
  styleUrls: ['./addon-sidebar.component.css'],
})
export class AddonSidebarComponent implements OnInit {
  appointmentForm: FormGroup;
  timeSlots: string[] = [
    '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
    '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
  ];

  bookingData: any = {
    Services: [],
    sendPaymentLink: '',
    total: 0,
    // OrderId:'',
    // PayerId:'',
    // PaymentId:'',
    // PaymentSource:''
  };
  userData: any;
  selectedServices: any;
  total!: string;
  public payPalConfig?: IPayPalConfig;

  constructor(
    private fb: FormBuilder,
    private allServicesService: ServiceService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.allServicesService.getService();
    this.userData = JSON.parse(localStorage.getItem('username') as any);
    this.selectedServices = JSON.parse(localStorage.getItem('selectedServices') as any) || [];
    this.initConfig();
  }

  calculateTotal(services: any[]): number {
    return services.reduce((acc, service) => acc + (service.price * service.quantity), 0);
  }

  onSubmit(orderID?: any, payerID?: any, paymentID?: any, paymentSource?: string): void {
    if (this.appointmentForm.valid) {
      this.bookingData = {
        user: this.userData.username,
        address1: this.appointmentForm.get('address1')?.value,
        address2: this.appointmentForm.get('address2')?.value,
        city: this.appointmentForm.get('city')?.value,
        state: this.appointmentForm.get('state')?.value,
        pincode: this.appointmentForm.get('pincode')?.value,
        appointmentDate: new Date(this.appointmentForm.value.appointmentDate),
        appointmentTime: this.appointmentForm.value.appointmentTime,
        sendPaymentLink: this.bookingData.sendPaymentLink || true,
        services: JSON.stringify(this.selectedServices),
        total: this.calculateTotal(this.selectedServices),
        StatusId: this.bookingData.StatusId || 1,
        OrderId:orderID||this.bookingData.OrderId,
        PayerId:payerID||this.bookingData.PayerId,
        PaymentId:paymentID||this.bookingData.PaymentId,
        PaymentSource:paymentSource||this.bookingData.PaymentSource
      };

      console.log('Form Submitted', this.bookingData);

      this.allServicesService.addBooking(this.bookingData).subscribe(
        (response) => {
          console.log('Booking submitted successfully:', response);
          alert('Booking added successfully');
          this.router.navigateByUrl('/mybooking');
        },
        (error) => {
          console.error('Error submitting booking:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  private initConfig(): void {
    this.selectedServices = this.selectedServices || [];

    const calculatedTotal = this.calculateTotal(this.selectedServices).toFixed(2);
    this.total = calculatedTotal;

    if (parseFloat(this.total) > 0) {
      const currency = 'USD';

      this.payPalConfig = {
        currency: currency,
        clientId: 'AaBagfr87lnoa38beNuCNqsWBRvZ6zPCafYIWihKIwPzgGHF3_waPggah77YCOF8jKDQlzRSw_eLXPbP',
        createOrderOnClient: (): ICreateOrderRequest => {
          return {
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: this.total,
                  breakdown: {
                    item_total: {
                      currency_code: currency,
                      value: this.total,
                    },
                  },
                },
                items: this.selectedServices.map((service: { name: string; quantity: number; price: number; }): ITransactionItem => {
                  return {
                    name: service.name,
                    quantity: service.quantity.toString(),
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                      currency_code: currency,
                      value: service.price.toFixed(2),
                    },
                  };
                }),
              },
            ],
          };
        },
        advanced: {
          commit: 'true',
        },
        style: {
          label: 'paypal',
          layout: 'vertical',
        },
        onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
          console.log('Transaction was approved, but not yet authorized', data, actions);
          actions.order.get().then((details: any) => {
            console.log('Full order details:', details);

            const orderID = data.orderID;
            const payerID = data.payerID;
            const paymentID = data.paymentID;
            const paymentSource = 'paypal'; 
        
            // Call the submit function and pass the payment details
            this.onSubmit(orderID, payerID, paymentID, paymentSource);
          });
        },
        onClientAuthorization: (data: any) => {
          console.log('Transaction completed successfully', data);
        },
        onCancel: (data: any, actions: any) => {
          console.log('Transaction canceled', data, actions);
        },
        onError: (err: any) => {
          console.log('Error during transaction', err);
        },
        onClick: (data: any, actions: any) => {
          console.log('PayPal button clicked', data, actions);
        },
      };
    } else {
      this.payPalConfig = undefined; 
    }
  }
}
