import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
bookings: any;

  

  ngOnInit(): void {
    // this.services = this.serviceService.getServices();
  }
}
