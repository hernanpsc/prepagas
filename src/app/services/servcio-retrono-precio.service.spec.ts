import { TestBed } from '@angular/core/testing';

import { ServcioRetronoPrecioService } from './servcio-retrono-precio.service';

describe('ServcioRetronoPrecioService', () => {
  let service: ServcioRetronoPrecioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcioRetronoPrecioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
