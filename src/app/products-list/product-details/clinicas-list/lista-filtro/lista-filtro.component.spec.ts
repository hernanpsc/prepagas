import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFiltroComponent } from './lista-filtro.component';

describe('ListaFiltroComponent', () => {
  let component: ListaFiltroComponent;
  let fixture: ComponentFixture<ListaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
