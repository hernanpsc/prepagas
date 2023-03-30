import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepagasComponent } from './prepagas.component';

describe('PrepagasComponent', () => {
  let component: PrepagasComponent;
  let fixture: ComponentFixture<PrepagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
