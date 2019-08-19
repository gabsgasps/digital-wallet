import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { SpendingInterface } from "../interfaces/Spending.interface";

const KEY = "spending";

@Injectable({
  providedIn: 'root'
})
export class SpedingManagerService {
  constructor(private storage: Storage) {}

  public set spendings(spendings: SpendingInterface[]) {
    this.storage.set(KEY, spendings);
  }

  async getSpendings(): Promise<SpendingInterface[]> {
    return await this.storage.get(KEY);
  }
}
