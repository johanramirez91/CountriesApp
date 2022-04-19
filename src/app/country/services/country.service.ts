import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  get params() {
    return new HttpParams().set('fields', 'name,population,area,flags,cca2');
  }

  buscarPais(termino: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<CountriesResponse[]>(url, { params: this.params });
  }

  buscarCapital(termino: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<CountriesResponse[]>(url, { params: this.params });
  }

  getPaisCodigo(id: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<CountriesResponse[]>(url);
  }

  buscarRegion(region: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<CountriesResponse[]>(url, { params: this.params });
  }
}
