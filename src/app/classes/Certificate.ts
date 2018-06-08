export class Certificate {
  id: string;
  description: string;
  year: number;

  constructor(id, description, year) {
    this.id = id;
    this.description = description;
    this.year = year;
  }
}
