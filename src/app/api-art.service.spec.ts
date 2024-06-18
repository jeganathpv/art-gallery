import { TestBed } from '@angular/core/testing';

import { ApiArtService } from './api-art.service';

describe('ApiArtService', () => {
  let service: ApiArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
