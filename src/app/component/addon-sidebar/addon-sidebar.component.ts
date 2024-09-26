import { Component } from '@angular/core';
import { AddonService } from 'src/app/services/addon.service';
interface Addon {
  name: string;
  price: number;
}
@Component({
  selector: 'app-addon-sidebar',
  templateUrl: './addon-sidebar.component.html',
  styleUrls: ['./addon-sidebar.component.css']
})
export class AddonSidebarComponent {
  addons: Addon[] = [];  // Initialize the addons array with proper type

  constructor(private addonService: AddonService) {}

  ngOnInit(): void {
    this.addons = this.addonService.getAddons();
  }

  addToCart(addon: Addon): void {
    // Add to cart logic here
    console.log('Adding to cart:', addon);
  }
}
