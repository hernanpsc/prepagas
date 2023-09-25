import { TestBed } from '@angular/core/testing';

import { ServcioRetornoPrecioService } from './servcio-retorno-precio.service';

describe('ServcioRetornoPrecioService', () => {
  let service: ServcioRetornoPrecioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcioRetornoPrecioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
