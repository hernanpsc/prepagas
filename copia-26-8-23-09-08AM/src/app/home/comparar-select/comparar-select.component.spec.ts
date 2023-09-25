import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararSelectComponent } from './comparar-select.component';

describe('CompararSelectComponent', () => {
  let component: CompararSelectComponent;
  let fixture: ComponentFixture<CompararSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompararSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompararSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
