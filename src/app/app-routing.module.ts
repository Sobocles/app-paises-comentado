import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutpagesComponent } from './shared/pages/aboutpages/aboutpages.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutpagesComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',//CUANDO ESCRIBAS EL PATH COUNTRY EN EL URL (EN EL IMPORT HAY QUE PONER LA DIRECCION DEL MODULO)
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ) //CARGA LOS COMPONENTES  HIJOS DE COUNTRY(el countries.module debe tener importado el modulo de routing.module de los paises para que funcione, ya que en el routing estan las rutas hijas de countries)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }