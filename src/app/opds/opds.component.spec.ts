import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdsComponent } from './opds.component';

describe('OpdsComponent', () => {
  let component: OpdsComponent;
  let fixture: ComponentFixture<OpdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
