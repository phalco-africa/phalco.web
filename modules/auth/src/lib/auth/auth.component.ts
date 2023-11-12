import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


export interface Forecast {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  weatherForecast$!: Observable<Forecast[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.weatherForecast$ = this.http.get<Forecast[]>(
      'https://gateways.users.phalco.africa/weatherforecast'
    );
  }
}
