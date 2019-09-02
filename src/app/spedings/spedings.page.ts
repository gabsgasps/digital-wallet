import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NavController, ToastController } from "@ionic/angular";
import { SpendingInterface } from "../interfaces/Spending.interface";
import { SpendingService } from "../services/spending.service";

@Component({
  selector: "app-spedings",
  templateUrl: "./spedings.page.html",
  styleUrls: ["./spedings.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpedingsPage implements OnInit {
  title = new FormControl("", [Validators.minLength(3), Validators.required]);
  value = new FormControl("", [Validators.minLength(1), Validators.required]);
  description = new FormControl("");

  constructor(
    private $spending: SpendingService,
    private navCtrl: NavController,
    private $toast: ToastController
  ) {}

  ngOnInit() {}

  private async showToast(msg: string) {
    const toast = await this.$toast.create({
      message: msg,
      mode: 'ios',
      closeButtonText: "X",
      animated: true,
      showCloseButton: true,
      cssClass: 'toast-walet'
    });

    return toast.present();
  }

  async save() {
    if (this.title.invalid && this.value.invalid) {
      await this.showToast("Sem conteúdo para salvar");
      return;
    }

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
