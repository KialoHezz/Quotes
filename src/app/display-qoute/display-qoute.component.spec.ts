import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQouteComponent } from './display-qoute.component';

describe('DisplayQouteComponent', () => {
  let component: DisplayQouteComponent;
  let fixture: ComponentFixture<DisplayQouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
