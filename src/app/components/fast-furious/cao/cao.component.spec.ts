import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaoComponent } from './cao.component';

describe('CaoComponent', () => {
  let component: CaoComponent;
  let fixture: ComponentFixture<CaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
