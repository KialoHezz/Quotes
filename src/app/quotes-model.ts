export class QuotesModel {
  showMore: boolean;
  constructor(
    public id: number,
    public username: string,
    public author: string,
    public quote: string,
    public completeDate: Date
  ) {
    //hide by default
    this.showMore = false;
  }
}


