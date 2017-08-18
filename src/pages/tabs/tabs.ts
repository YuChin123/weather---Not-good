import { Component } from '@angular/core';

import { WeatherDetailPage } from '../weather-detail/weather-detail';
import { ForecastPage } from '../forecast/forecast';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WeatherDetailPage;
  tab3Root = ForecastPage;

  constructor() {

  }
}
