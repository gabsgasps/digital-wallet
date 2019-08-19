import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spending-card',
  templateUrl: './spending-card.component.html',
  styleUrls: ['./spending-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpendingCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() value: string | number;
  @Input() status: string;
  constructor() {}

  ngOnInit() {}
}
