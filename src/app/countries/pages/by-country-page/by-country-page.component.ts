import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/coutnry';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {

  }

  searchByCountry(term: string): void {
    this.countryService.searchCapital(term).subscribe({
      next: countries => this.countries = countries
    });
  }

}
