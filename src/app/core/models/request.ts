export class Request {
  constructor(
    public name = '',
    public email = '',
    public message = '',
    public category = '',
    public date = Date,
    public _id?: string
  ) {}
}
