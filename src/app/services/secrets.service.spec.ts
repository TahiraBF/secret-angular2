import { TestBed, inject } from '@angular/core/testing';

import { SecretsService } from './secrets.service';

describe('SecretsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretsService]
    });
  });

  it('should ...', inject([SecretsService], (service: SecretsService) => {
    expect(service).toBeTruthy();
  }));
});
