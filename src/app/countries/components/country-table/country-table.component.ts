import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/coutnry';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];


}
