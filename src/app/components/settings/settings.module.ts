import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, IonicModule],
  exports: [SettingsComponent]
})
export class SettingsModule {}
