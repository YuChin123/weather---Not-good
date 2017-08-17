import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ForecastPage } from '../forecast/forecast'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
weatherArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1")
    .map(res => res.json())
    .subscribe(
      data => {
        console.log (data.results)
          this.weatherArray = data.results; 
      }, 
      err => {

      },
      ()=> {
        console.log('everything is done ! ')
      }
    )  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  itemTapped(user){
  	this.navCtrl.push(ForecastPage, {weather:name});
  	
  }

}
 
