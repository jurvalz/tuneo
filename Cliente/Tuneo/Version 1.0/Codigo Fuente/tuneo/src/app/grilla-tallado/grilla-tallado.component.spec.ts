import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaTalladoComponent } from './grilla-tallado.component';

describe('GrillaTalladoComponent', () => {
  let component: GrillaTalladoComponent;
  let fixture: ComponentFixture<GrillaTalladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaTalladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaTalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
