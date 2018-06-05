import { TestBed, inject } from '@angular/core/testing';

import { ArtuserService } from './artuser.service';

describe('ArtuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtuserService]
    });
  });

  it('should be created', inject([ArtuserService], (service: ArtuserService) => {
    expect(service).toBeTruthy();
  }));
});
