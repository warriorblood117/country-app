import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/coutnry';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe({
        next: country => {
          if (!country) return this.router.navigateByUrl('');
          return this.country = country;
        }
      }
      );
  }

  searchCountry(code: string) {
    this.countryService.searchCountryByAlphaCode(code)
      .subscribe(country => console.log(country));
  }

}
