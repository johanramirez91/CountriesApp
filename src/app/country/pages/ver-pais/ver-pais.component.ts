import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CountriesResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  pais!: CountriesResponse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getPaisCodigo(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais[0];
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countryService.getPaisCodigo(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
