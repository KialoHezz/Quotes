export class QuotesModel {
  constructor(
    public id: number,
    public username: string,
    public author: string,
    public quote: string,
    public completeDate: Date
  ) {
    
  }
}
