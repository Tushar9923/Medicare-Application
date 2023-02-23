import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediclameComponent } from './mediclame.component';

describe('MediclameComponent', () => {
  let component: MediclameComponent;
  let fixture: ComponentFixture<MediclameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediclameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediclameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
