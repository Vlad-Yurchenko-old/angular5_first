import {Name} from './Name';
import {Nsi} from './Nsi';
import {Project} from './Project';

export class CV {
  location: Location;
  position: Nsi;
  description: string;
  projectCode: string;
  name: Name;
  projects: Project[];
  summary: object[];
  additionalInfo: object[];
  expertise: object[];
  certificates: object[];
  education: object[];
  languages: object[];

  constructor(location, position, description, projectCode, name, projects, summary, additionalInfo, expertise, certificates, education, languages) {
    this.location = location;
    this.position = position;
    this.description = description;
    this.projectCode = projectCode;
    this.name = name;
    this.projects = projects;
    this.summary = summary;
    this.additionalInfo = additionalInfo;
    this.expertise = expertise;
    this.certificates = certificates;
    this.education = education;
    this.languages = languages;
  }

}
