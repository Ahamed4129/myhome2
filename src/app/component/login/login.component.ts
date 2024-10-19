import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    "username": "",
    "password": ""
  };
  constructor(private http: HttpClient, private router: Router){}
  onLogin() {
    console.log();
    this.http.post('https://localhost:7163/api/Auth/login', this.loginObj).subscribe((res:any)=>{
      if(res.token) {
        alert('login Success');
        localStorage.setItem('loginTOken', res.token);
        localStorage.setItem('username',JSON.stringify(res))
        this.router.navigateByUrl('/home'); 
      } else {
        alert(res.message);
      }
    })
  }
}
