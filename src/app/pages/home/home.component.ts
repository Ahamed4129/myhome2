import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // this.services = this.serviceService.getServices();
  }
}
