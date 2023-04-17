import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
/*
  searchByCapital( term: string ):void  {
    console.log("desde capital");
    console.log({term});
    

  }
*/
public countries: Country[] = [];

constructor( private countriesService: CountriesService ) {}

searchByCapital( term: string ):void  {
  this.countriesService.searchCapital( term )
    .subscribe( (countries: Country[]) => {
      this.countries = countries;
    });

}

}
