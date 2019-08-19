import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SpendingService } from "../services/spending.service";
import { SpendingInterface } from "../interfaces/Spending.interface";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-spedings",
  templateUrl: "./spedings.page.html",
  styleUrls: ["./spedings.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpedingsPage implements OnInit {
  title = new FormControl("");
  value = new FormControl("");
  description = new FormControl("");

  constructor(
    private $spending: SpendingService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  save() {
    const spending: SpendingInterface = {
      title: this.title.value,
      value: this.value.value,
      description: this.description.value,
      indubitable: false
    };

    this.$spending.registerSpending = spending;
    this.navCtrl.pop();
  }
}
