import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherResponseModel } from '../../weather.response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public form: FormGroup;
  public weatherData: Observable<WeatherResponseModel>;
  public cities: string[] = ['Warsaw', 'Berlin', 'London', 'Paris', 'Rome', 'Barcelona', 'Amsterdam', 'Bucharest'];

  public isDropdownOpen: boolean = false;

  constructor(
    private weatherService: WeatherService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: ['', Validators.required]
    });
    const citySaved: string = JSON.parse(JSON.stringify(localStorage.getItem('city')));
    this.getWeatherData(citySaved);
  }

  public getCityFormField() {
    return this.form.get('city');
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectCity(city: string): void {
    this.getCityFormField()?.setValue(city);
    this.toggleDropdown();
    this.getWeatherData(city);
  }

  public findCertainCityWeather(): void {
    const cityFind = this.getCityFormField()?.value;
    if (cityFind) {
      this.getWeatherData(cityFind);
      localStorage.setItem('city', cityFind);
    }
  }

  private getWeatherData(city: string): void {
    this.weatherData = this.weatherService.getLocationCityWeather(city);
  }
}

