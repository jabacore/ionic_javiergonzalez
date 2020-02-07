import { TestBed } from '@angular/core/testing';

import { SpotcrudService } from './spotcrud.service';

describe('SpotcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotcrudService = TestBed.get(SpotcrudService);
    expect(service).toBeTruthy();
  });
});
