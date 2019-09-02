import { Injectable } from "@angular/core";
import { StatusEnum } from "../enums/Status.enum";
import { SpendingInterface } from "../interfaces/Spending.interface";
import { User } from "../interfaces/User.interface";
import { SpedingManagerService } from "./spending-manager-service";

@Injectable({
  providedIn: "root"
})
export class SpendingService {
  limit: number;
  private status = StatusEnum;
  user: User;

  allSpendings: SpendingInterface[];
  constructor(private $manager: SpedingManagerService) {
    this.allSpendings = [
      {
        title: "Internet Celular",
        description:
          "Internet 3G/4G do celular, debitado direto na conta todo dia 16 de cada mês",
        value: 60.0,
        indubitable: true,
        status: this.status.OK
      },
      {
        title: "Mercado",
        description: "Compra mensal",
        value: 300,
        indubitable: true,
        status: this.status.OK
      }
    ];

    this.user = {
      name: "Gabriel",
      middleName: "Gasparino",
      gender: "M",
      balance: 2000
    };
    this.$manager.getSpendings().then(spendings => {
      if (spendings) {
        this.allSpendings = spendings;
      }
    });

    this.limit = (this.user.balance * 30) / 100;
  }

  public get spendings() {
    return this.allSpendings;
  }

  public get totalSpendings(): number {
    return this.spendings.reduce((p, c) => (p += +c.value), 0);
  }

  public get balance(): number {
    return this.user.balance;
  }

  public get currentBalance(): number {
    return this.balance - this.totalSpendings;
  }

  public get isOnLimit() {
    if (this.currentBalance < this.limit) {
      return this.status.DANGER;
    } else if (
      this.currentBalance > this.limit &&
      this.currentBalance > this.limit + 300
    ) {
      return this.status.WARNING;
    }

    return this.status.OK;
  }

  private setStatus(value: number): StatusEnum {
    if (value < this.limit) {
      return this.status.OK;
    } else if (value > this.limit && value < this.limit * 2) {
      return this.status.WARNING;
    } else {
      return this.status.DANGER;
    }
  }

  public set registerSpending(spending: SpendingInterface) {
    spending.status = this.setStatus(spending.value);
    this.allSpendings.unshift(spending);
    this.$manager.spendings = this.allSpendings;
  }
}
