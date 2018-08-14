export class Request {
  constructor(
    public _id?: string,
    public name = "",
    public email = "",
    public message = "",
    public category = "",
    public date = Date
  ) {}
}
