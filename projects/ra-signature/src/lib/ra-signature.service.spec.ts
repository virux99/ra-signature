import { TestBed } from '@angular/core/testing';

import { RaSignatureService } from './ra-signature.service';

describe('RaSignatureService', () => {
  let service: RaSignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaSignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
