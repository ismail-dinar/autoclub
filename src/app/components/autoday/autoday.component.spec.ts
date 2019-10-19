import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodayComponent } from './autoday.component';

describe('AutodayComponent', () => {
  let component: AutodayComponent;
  let fixture: ComponentFixture<AutodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
