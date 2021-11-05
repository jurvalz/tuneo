import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneosComponent } from './tuneos.component';

describe('TuneosComponent', () => {
  let component: TuneosComponent;
  let fixture: ComponentFixture<TuneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
