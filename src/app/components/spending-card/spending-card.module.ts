import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpendingCardComponent } from './spending-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SpendingCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [SpendingCardComponent]
})
export class SpendingCardModule {}
