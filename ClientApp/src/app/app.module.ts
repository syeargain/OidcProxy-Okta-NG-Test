import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from 'src/hello/hello.component';
import { MeService } from 'src/hello/me.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForcastComponent } from '../weather-forecast/weather-forecast.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        WeatherForcastComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [MeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
