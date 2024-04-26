import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForcastComponent } from './weather-forecast.component';

describe('WeatherForcastComponent', () => {
  let component: WeatherForcastComponent;
  let fixture: ComponentFixture<WeatherForcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForcastComponent]
    });
    fixture = TestBed.createComponent(WeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
