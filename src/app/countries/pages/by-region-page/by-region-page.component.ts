import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/coutnry';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe({
      next: region => this.countries = region
    });
  }


}
