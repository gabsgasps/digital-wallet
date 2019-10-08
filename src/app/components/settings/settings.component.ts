import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  clickable = true;
  clickable2 = true;

  constructor(private $modalRef: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.$modalRef.dismiss();
  }
}
