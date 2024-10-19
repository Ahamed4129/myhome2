import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';
import { AddonSidebarComponent } from './component/addon-sidebar/addon-sidebar.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { ExampleInterceptorInterceptor } from './services/example-interceptor.interceptor';
import { MybookingComponent } from './component/mybooking/mybooking.component';
import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddonSidebarComponent,
    ServiceCardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    LoginComponent,
    MybookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule ,HttpClientModule,ReactiveFormsModule,NgxPayPalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ExampleInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
