import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.getPaisCodigo(id)))
      .subscribe((response) => console.log(response));

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countryService.getPaisCodigo(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
