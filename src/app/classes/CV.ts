import {Name} from './Name';
import {Nsi} from './Nsi';
import {Project} from './Project';
import {Summary} from './Summary';
import {AdditionalInfo} from './AdditionalInfo';
import {Expertise} from './Expertise';
import {Certificate} from './Certificate';
import {Education} from './Education';
import {Language} from './Language';

export class CV {
  location: Location;
  position: Nsi;
  description: string;
  projectCode: string;
  name: Name;
  projects: Project[];
  summary: Summary[];
  additionalInfo: AdditionalInfo[];
  expertise: Expertise[];
  certificates: Certificate[];
  education: Education[];
  languages: Language[];

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
