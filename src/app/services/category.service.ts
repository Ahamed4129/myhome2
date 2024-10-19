import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private selectedServicesSource = new BehaviorSubject<any>([]);
  selectedServices$ = this.selectedServicesSource.asObservable();

  updateSelectedServices(services: any[]): void {
    this.selectedServicesSource.next(services);
  }

  getSelectedServices(): any[] {
    return this.selectedServicesSource.getValue();
  }
}
