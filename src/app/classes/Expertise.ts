import {Nsi} from './Nsi';

export class Expertise {
  id: string;
  area: string;
  tags: Nsi[];

  constructor(id, area, tags) {
    this.id = id;
    this.area = area;
    this.tags = tags;
  }
}
