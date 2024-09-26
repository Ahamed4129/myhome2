import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';
import { AddonSidebarComponent } from './component/addon-sidebar/addon-sidebar.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddonSidebarComponent,
    ServiceCardComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
