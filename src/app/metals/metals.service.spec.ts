import { TestBed } from '@angular/core/testing';

import { MetalsService } from './metals.service';

describe('MetalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalsService = TestBed.get(MetalsService);
    expect(service).toBeTruthy();
  });
});
