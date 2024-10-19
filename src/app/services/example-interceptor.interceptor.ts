import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const username=localStorage.getItem('username')
    const token=localStorage.getItem('loginTOken');
    const selectedServices=localStorage.getItem('service')
    const newCloneRequest=request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`,
        Username: username ? username : '',
      SelectedServices: selectedServices ? selectedServices : ''
      }
    })
    return next.handle(newCloneRequest);
  }
}
