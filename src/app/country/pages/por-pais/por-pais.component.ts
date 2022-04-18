import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountriesResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  @Input() placeholder: string = '';
  termino: string = '';
  error: boolean = false;
  paises: CountriesResponse[] = [];
  constructor(private countryService: CountryService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
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

  sugerencias(termino: string) {
    console.log(termino);
  }

  ngOnInit(): void {}
}
