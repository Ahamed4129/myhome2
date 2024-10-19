// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'https://localhost:7163/api/Auth';
//   private tokenKey = 'loginToken';  // Use consistent token key name
//   private authStatusSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
//   public authStatus = this.authStatusSubject.asObservable();

//   constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {}

//   login(username: string, password: string): Observable<boolean> {
//     return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password })
//       .pipe(
//         map(response => {
//           if (response && response.token) {
//             localStorage.setItem(this.tokenKey, response.token);  // Store token
//             this.authStatusSubject.next(true);  // Update auth status
//             return true;
//           }
//           return false;
//         })
//       );
//   }

//   isAuthenticated(): boolean {
//     const token = localStorage.getItem(this.tokenKey);
//     return !!token && !this.jwtHelper.isTokenExpired(token);  // Check token validity
//   }

//   getToken(): string {
//     return localStorage.getItem(this.tokenKey) || '';  // Retrieve token
//   }

//   logout(): void {
//     localStorage.removeItem(this.tokenKey);  // Remove token
//     this.authStatusSubject.next(false);  // Update auth status
//     this.router.navigate(['/login']);  // Redirect to login page
//   }
// }
