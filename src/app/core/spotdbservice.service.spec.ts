import { TestBed } from '@angular/core/testing';

import { SpotdbService } from './spotdbservice.service';

describe('SpotdbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotdbService = TestBed.get(SpotdbService);
    expect(service).toBeTruthy();
  });
});
