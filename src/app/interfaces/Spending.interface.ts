import { StatusEnum } from '../enums/Status.enum';

export interface SpendingInterface {
  title: string;
  description: string;
  value: number;
  indubitable: boolean;
  status?: StatusEnum;
}
