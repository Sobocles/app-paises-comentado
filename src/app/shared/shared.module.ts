import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutpagesComponent } from './pages/aboutpages/aboutpages.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutpagesComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
    
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutpagesComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
