import {UserInfo} from './UserInfo';
import {CV} from './CV';

export class UserCV {
  id: string;
  owner: UserInfo;
  language: string;
  lastModified: number;
  lastModifiedBy: UserInfo;
  version: number;
  type: string;
  cv: CV;
  constructor(id, owner, language, lastModified, lastModifiedBy, version, cv) {
    this.id = id;
    this.owner = owner;
    this.language = language;
    this.lastModified = lastModified;
    this.lastModifiedBy = lastModifiedBy;
    this.version = version;
    this.cv = cv
  }
}
