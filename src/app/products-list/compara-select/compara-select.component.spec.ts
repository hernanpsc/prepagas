import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaSelectComponent } from './compara-select.component';

describe('ComparaSelectComponent', () => {
  let component: ComparaSelectComponent;
  let fixture: ComponentFixture<ComparaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
