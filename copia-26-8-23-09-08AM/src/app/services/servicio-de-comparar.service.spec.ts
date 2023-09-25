import { TestBed } from '@angular/core/testing';

import { ServicioDeCompararService } from './servicio-de-comparar.service';

describe('ServicioDeCompararService', () => {
  let service: ServicioDeCompararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeCompararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
