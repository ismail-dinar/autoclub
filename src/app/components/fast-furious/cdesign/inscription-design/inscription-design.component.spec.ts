import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDesignComponent } from './inscription-design.component';

describe('InscriptionDesignComponent', () => {
  let component: InscriptionDesignComponent;
  let fixture: ComponentFixture<InscriptionDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
