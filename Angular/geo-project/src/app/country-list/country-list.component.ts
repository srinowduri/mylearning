import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { countries } from '../country.data';
import { Country } from '../model/country.model';
import { CountriesService } from '../service/countries.service';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Observable<Country[]>;
  constructor(private ctr_service: CountriesService) { }

  ngOnInit(): void {
    // this.countries = countries;
    this.countries = this.getCountries();
    console.log(JSON.stringify(countries));
  }

  getCountries() {
    return this.ctr_service.getCountries();
  }

}
