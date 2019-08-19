import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { NavController } from "@ionic/angular";
import { APPLICATIONS_ROUTES } from "../enums/applications-routes.enum";
import { User } from "../interfaces/User.interface";
import { SpendingService } from "../services/spending.service";
import { SpendingInterface } from "../interfaces/Spending.interface";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  ROUTES = APPLICATIONS_ROUTES;
  user: User;
  spendings: SpendingInterface[];
  balance = new FormControl();
  constructor(
    private navCtrl: NavController,
    private $spending: SpendingService
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
}
