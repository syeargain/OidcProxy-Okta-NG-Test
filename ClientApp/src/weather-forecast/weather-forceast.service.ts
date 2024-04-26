import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'src/models/userInfo';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../models/weatherForecast'

@Injectable({
    providedIn: 'root'
})
export class WeatherForcastService {
    constructor(private readonly httpClient: HttpClient) { }

    getWeatherForcast(): Observable<WeatherForecast> {
        return this.httpClient.get<WeatherForecast>('/api/WeatherForecast/usa');
    }
}
