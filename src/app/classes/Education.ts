export class Education {
  id: string;
  startYear: number;
  endYear: number;
  institution: string;

  constructor(id, startYear, endYear, institution) {
    this.id = id;
    this.startYear = startYear;
    this.endYear = endYear;
    this.institution = institution;
  }
}
