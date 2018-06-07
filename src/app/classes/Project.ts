import {Nsi} from './Nsi';
import {DateValue} from './DateValue';
import {ProjectRecord} from './ProjectRecord';

export class Project {
  id: string;
  startDate: DateValue;
  endDate: DateValue;
  project: ProjectRecord;
  position: Nsi;
  responsibilities: string;
  tags: Nsi[];

  constructor(id, startDate, endDate, project, position, responsibilities, tags) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.project = project;
    this.position = position;
    this.responsibilities = responsibilities;
    this.tags = tags;
  }
}
