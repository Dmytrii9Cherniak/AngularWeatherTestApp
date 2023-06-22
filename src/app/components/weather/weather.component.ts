import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherResponseModel } from '../../models/weather.response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public form: FormGroup;
  public weatherData: Observable<WeatherResponseModel>;
  public cities: string[] = ['Warsaw', 'Berlin', 'London', 'Paris', 'Rome', 'Barcelona', 'Amsterdam', 'Bucharest'];
  public savedCity: string;
  public isDropdownOpen: boolean = false;

  constructor(
    private weatherService: WeatherService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: ['', Validators.required]
    });
    this.savedCity = JSON.parse(JSON.stringify('city'));
    this.weatherData = this.weatherService.getLocationCityWeather(this.savedCity);
  }

  public getCityFormField() {
    return this.form.get('city');
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectCity(city: string): void {
    this.weatherData = this.weatherService.getLocationCityWeather(city);
    this.toggleDropdown();
  }

  public findCertainCityWeather(): void {
    const cityFind = this.getCityFormField()?.value;
    this.weatherData = this.weatherService.getLocationCityWeather(cityFind);
    localStorage.setItem('city', cityFind);
  }

}
