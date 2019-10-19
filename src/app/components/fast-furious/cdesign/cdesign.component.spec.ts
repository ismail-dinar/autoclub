import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDesignComponent } from './cdesign.component';

describe('CDesignComponent', () => {
  let component: CDesignComponent;
  let fixture: ComponentFixture<CDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
