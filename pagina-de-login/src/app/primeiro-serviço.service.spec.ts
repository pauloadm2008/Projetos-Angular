import { TestBed } from '@angular/core/testing';

import { PrimeiroServiçoService } from './primeiro-serviço.service';

describe('PrimeiroServiçoService', () => {
  let service: PrimeiroServiçoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeiroServiçoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
