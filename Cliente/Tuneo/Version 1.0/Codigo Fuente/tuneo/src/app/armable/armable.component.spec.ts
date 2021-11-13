import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmableComponent } from './armable.component';

describe('ArmableComponent', () => {
  let component: ArmableComponent;
  let fixture: ComponentFixture<ArmableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
