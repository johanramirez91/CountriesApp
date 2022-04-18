import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/name/${termino}`;

    return this.http.get<CountriesResponse[]>(url);
  }

  buscarCapital(termino: string): Observable<CountriesResponse[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<CountriesResponse[]>(url);
  }

  getPaisCodigo(id: string): Observable<CountriesResponse> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<CountriesResponse>(url);
  }
}
