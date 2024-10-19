import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'https://localhost:7163/api';
  constructor(private http: HttpClient) { }
  getService():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/service`);
  }
  addBooking(bookingData: any): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.baseUrl}/Booking`, JSON.stringify(bookingData), { headers });
}
getBookings(): Observable<any> {
  return this.http.get(this.baseUrl);
}

// Get a specific booking by ID
getBookingById(user: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/Booking/${user}`);
}
getBookingsWithStatus(id:any): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/Status/GetBookingWithStatus/${id}`);
  
}

}
