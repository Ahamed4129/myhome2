import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myhome2';
constructor(private router:Router){

}
ngOnInit(){
   if([null,'null',undefined,'undefined',NaN,'NaN',''].indexOf(localStorage.getItem('loginTOken')) !== -1) {
    this.router.navigate(['/login']);
   }
}
  // if([null,'null',undefined,'undefined',NaN,'NaN',''].indexOf(localStorage.getItem('loginToken')) !== -1) {
  //   this.router.navigate(['/login']);
  // }
   
}
