import { Component, OnInit } from '@angular/core';
import { CountriesResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: CountriesResponse[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    this.regionActiva = region;
  }

  getStyle(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mt-3'
      : 'btn btn-outline-primary mt-3';
  }

  buscar(region: string) {
    this.countryService.buscarRegion(region).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    });
  }
}
