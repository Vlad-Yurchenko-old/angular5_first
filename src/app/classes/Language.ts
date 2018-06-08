export class Language {
  id: string;
  language: string;
  proficiency: string;

  constructor(id, language, proficiency) {
    this.id = id;
    this.language = language;
    this.proficiency = proficiency;
  }
}
