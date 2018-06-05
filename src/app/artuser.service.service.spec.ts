import { TestBed, inject } from '@angular/core/testing';

import { Artuser.ServiceService } from './artuser.service.service';

describe('Artuser.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Artuser.ServiceService]
    });
  });

  it('should be created', inject([Artuser.ServiceService], (service: Artuser.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
