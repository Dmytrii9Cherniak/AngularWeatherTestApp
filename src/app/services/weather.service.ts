import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponseModel } from '../weather.response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public getLocationCityWeather(city: string):Observable<WeatherResponseModel> {
    return this.httpClient.get<WeatherResponseModel>(`${environment.apiUrl}/current.json?key=${environment.apiKey}&q=${city}&aqi=yes`);
  }

}
