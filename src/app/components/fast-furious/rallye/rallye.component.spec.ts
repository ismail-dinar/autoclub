import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RallyeComponent } from './rallye.component';

describe('RallyeComponent', () => {
  let component: RallyeComponent;
  let fixture: ComponentFixture<RallyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RallyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RallyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
