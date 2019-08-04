import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { APPLICATIONS_ROUTES } from '../enums/applications-routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ROUTES = APPLICATIONS_ROUTES;
  user = {
    name: 'Gabriel',
    middleName: 'Gasparino',
    gender: 'M',
    balance: 1200
  };

  constructor(
    private navCtrl: NavController
  ) {}

  navigation(route: string) {
    this.navCtrl.navigateForward(route);
  }
}
