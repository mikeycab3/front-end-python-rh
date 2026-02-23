import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddComponent } from './employee-add.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeAddComponent', () => {
  let component: EmployeeAddComponent;
  let fixture: ComponentFixture<EmployeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddComponent,RouterTestingModule],
      providers: [provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario válido con datos correctos', () => {
    component.empleado.nombre = 'Jose Sotero';
    component.empleado.departamento = 'Operaciones';
    component.empleado.sueldo = 10000;
  })
  it('Debe llamar método al hacer click', () => {
  spyOn(component, 'guardar');

  const btn = fixture.nativeElement.querySelector('button');
  btn.click();

  expect(component.guardar).toHaveBeenCalled();
    });

  it('entrar al metodo guardar', () => {
    component.save = false;
    component.error = '';
    component.empleado.nombre = 'Jose miguel'
    component.empleado.departamento = 'sistemas'
    component.empleado.sueldo = 15000
     component.guardar();
  })
});
