export class Expense {
  public name: string;
  public description: string;
  public date: string;
  public time: string;
  public cost: number;

  constructor(name: string, desc: string, date: string, time: string, cost: number) {
    this.name = name;
    this.description = desc;
    this.date = date;
    this.time = time;
    this.cost = cost;
  }
}
