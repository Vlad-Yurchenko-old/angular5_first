import {ProjectNsiDescription} from './ProjectNsiDescription';

export class ProjectRecord {
  id: string;
  code: string;
  description: ProjectNsiDescription;

  constructor(id, code, description) {
    this.id = id;
    this.code = code;
    this.description = description;
  }
}
