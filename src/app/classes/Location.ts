export class Location {
  id: string;
  code: string;
  title: string;

  constructor(id, code = null, title = null) {
    this.id = id;
    this.code = code;
    this.title = title;
  }

}
