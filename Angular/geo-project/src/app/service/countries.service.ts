import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country.model';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    const url = "http://localhost:2000/api/countries"
    return this.http.get<Country[]>(url, {});
  }

  // getCountrywithStates(id: string) {
  //   const url = "http://localhost:2000/api/countryAPI/" + id;
  //   return this.http.get<
  // }
}
