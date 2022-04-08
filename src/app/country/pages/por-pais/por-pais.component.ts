import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountriesResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  paises: CountriesResponse[] = [];
  constructor(private countryService: CountryService) {}

  buscar() {
    this.error = false;
    this.countryService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (error) => {
        this.error = true;
        console.info(error);
      }
    );
  }

  ngOnInit(): void {}
}
