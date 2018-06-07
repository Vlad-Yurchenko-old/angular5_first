import {Nsi} from './Nsi';

export class ProjectNsiDescription {
  id: string;
  name: string;
  description: string;
  company: Nsi;

  constructor(id, name, description, company) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.company = company;
  }
}
