import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  username=  'Ahamed';
  booking: any[] = [];
  selectedBooking: any = null;

  constructor(private allservice: ServiceService,private route:Router) {}

  ngOnInit(): void {
   // this.username = JSON.parse(localStorage.getItem('username') as any);
    this.getBookings();
  }
  back(){
    this.route.navigateByUrl('/mybooking')
  }
  getBookings(): void {
    console.log('username', this.username);
    this.allservice.getBookingById(this.username).subscribe(
      (data: any[]) => {
        this.booking = data.map(item => ({
          ...item,
          services: JSON.parse(item.services),
          total: JSON.parse(item.services).reduce((acc: any, service: any) => acc + (service.price * service.quantity), 0),
        }));
        // Assuming we want to display the first booking as `selectedBooking`
        this.selectedBooking = this.booking.length > 0 ? this.booking[0] : null;
      },
      error => {
        console.error('Error fetching bookings', error);
      }
    );
  }

  calculateTotal(services: any[]): number {
    return services.reduce((acc, service) => acc + (service.price * service.quantity), 0);
  }
}
