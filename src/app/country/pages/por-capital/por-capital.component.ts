import { Component, OnInit } from '@angular/core';
import { CountriesResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  paises: CountriesResponse[] = [];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.countryService.buscarCapital(this.termino).subscribe(
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
}
