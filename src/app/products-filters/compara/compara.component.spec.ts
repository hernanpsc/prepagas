import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaComponent } from './compara.component';

describe('ComparaComponent', () => {
  let component: ComparaComponent;
  let fixture: ComponentFixture<ComparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
