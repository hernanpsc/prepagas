import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaItemComponent } from './compara-item.component';

describe('ComparaItemComponent', () => {
  let component: ComparaItemComponent;
  let fixture: ComponentFixture<ComparaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
