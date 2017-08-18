import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

/**
 * Generated class for the ForecastPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

	Forecast = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
	this.Forecast= navParams.get('weather');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
