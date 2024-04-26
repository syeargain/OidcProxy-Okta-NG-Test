import { Component, OnInit } from '@angular/core';
import { WeatherForcastService } from './weather-forceast.service'
import {WeatherForecast} from '../models/weatherForecast'

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})


export class WeatherForcastComponent implements OnInit
{
    forecasts: WeatherForecast[] = [];
  
constructor(private WeatherForcastService: WeatherForcastService){}

  ngOnInit(): void {
    this.getForecasts();
  }

  
  getForecasts():void {
      this.WeatherForcastService.getWeatherForcast()
      .subscribe(
          weatherforecast => {
              return this.forecasts.push(weatherforecast);
          }
      );

  }
  //forecasts: WeatherForecast[] weatherForecast = null;

}

