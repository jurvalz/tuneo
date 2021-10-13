import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaModularComponent } from './grilla-modular.component';

describe('GrillaModularComponent', () => {
  let component: GrillaModularComponent;
  let fixture: ComponentFixture<GrillaModularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaModularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
