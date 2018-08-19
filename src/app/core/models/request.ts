export class Request {
  constructor(
    public name = '',
    public email = '',
    public message = '',
    public category = '',
    public _id?: string
  ) {}
}
