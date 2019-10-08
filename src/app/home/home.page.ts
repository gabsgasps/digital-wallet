import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { SettingsComponent } from '../components/settings/settings.component';
import { APPLICATIONS_ROUTES } from '../enums/applications-routes.enum';
import { SpendingInterface } from '../interfaces/Spending.interface';
import { User } from '../interfaces/User.interface';
import { SpendingService } from '../services/spending.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  ROUTES = APPLICATIONS_ROUTES;
  user: User;
  spendings: SpendingInterface[];
  balance = new FormControl();
  constructor(
    private navCtrl: NavController,
    private $spending: SpendingService,
    private $modal: ModalController
  ) {
    this.user = this.$spending.user;
  }

  navigation(route: string) {
    this.navCtrl.navigateForward(route);
  }

  ngOnInit(): void {
    this.balance.valueChanges.subscribe(value => (this.user.balance = value));
  }

  ionViewDidEnter() {
    this.balance.setValue(this.user.balance);
    this.spendings = this.$spending.spendings;
  }

  get currentBalance(): number {
    return this.$spending.currentBalance;
  }

  async goToSettings() {
    const modal = await this.$modal.create({
      component: SettingsComponent,
      mode: 'ios',
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true,
      cssClass: ['mode-nubank']
    });

    modal.present();
  }
}
