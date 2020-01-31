import { TestBed } from '@angular/core/testing';

import { SpotdbserviceService } from './spotdbservice.service';

describe('SpotdbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotdbserviceService = TestBed.get(SpotdbserviceService);
    expect(service).toBeTruthy();
  });
});
