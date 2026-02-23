import { TestBed } from '@angular/core/testing';

import { EmpleadoService } from './empleado.service';
import { provideHttpClient } from '@angular/common/http';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()
      ]});
    service = TestBed.inject(EmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
