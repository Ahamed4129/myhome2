import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { AddonSidebarComponent } from './component/addon-sidebar/addon-sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { MybookingComponent } from './component/mybooking/mybooking.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoryComponent },
  {path:'card',component:AddonSidebarComponent},
  {path:'mybooking',component:MybookingComponent},
  {path:'view',component:ServiceCardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/login' }  // Fallback route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
