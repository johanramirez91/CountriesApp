import { Component, Input, OnInit } from '@angular/core';
import { CountriesResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.scss'],
})
export class TablapaisesComponent implements OnInit {
  @Input() paises: CountriesResponse[] = [];
  @Input() error: string = '';
  constructor() {}

  ngOnInit(): void {}
}
