import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFuriousComponent } from './fast-furious.component';

describe('FastFuriousComponent', () => {
  let component: FastFuriousComponent;
  let fixture: ComponentFixture<FastFuriousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastFuriousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastFuriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
