import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaPremiumComponent } from './grilla-premium.component';

describe('GrillaPremiumComponent', () => {
  let component: GrillaPremiumComponent;
  let fixture: ComponentFixture<GrillaPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
