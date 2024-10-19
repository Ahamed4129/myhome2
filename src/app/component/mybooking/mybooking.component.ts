import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit{
  bookings: any[]=[];
  username= 'Ahamed'
  // username: string = '';
ngOnInit(): void {
  this.getBookings();
  this.username=JSON.parse(localStorage.getItem('username')as any)
}
  
constructor(private allservice:ServiceService){}

getBookings(): void {
  console.log('username',this.username)
  this.allservice.getBookingById(this.username).subscribe(
    (data: any[]) => {
      this.bookings = data.map(item=>({
        ...item,
        services:JSON.parse(item.services),
        total:JSON.parse(item.services).reduce((acc:any, service:any) => acc + (service.price * service.quantity), 0),
      }));
    },
    error => {
      console.error('Error fetching bookings', error);
    }
  );
}
selectedBooking: any=null;
isBookingContainerVisible: boolean = false;
toggleBookingContainer(booking: any): void {
  const bookingId = booking.id;
   //this.selectedBooking = booking;
   this.isBookingContainerVisible = !this.isBookingContainerVisible;
  this.allservice.getBookingsWithStatus(bookingId).subscribe(
    (data) => {
      this.selectedBooking = booking; 
      console.log('Selected Booking:', this.selectedBooking);
    },
  )
   console.log('Toggled booking:', this.selectedBooking); 
}
calculateTotal(services: any[]): number {
  return services.reduce((acc, service) => acc + (service.price * service.quantity), 0);
}


}
