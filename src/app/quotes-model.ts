export class QuotesModel {
  showDescription: boolean;
  constructor(
    public id: number,
    public username: string,
    public author: string,
    public quote: string,
    public completeDate: Date
  ) {
    this.showDescription = false;
  }
}


