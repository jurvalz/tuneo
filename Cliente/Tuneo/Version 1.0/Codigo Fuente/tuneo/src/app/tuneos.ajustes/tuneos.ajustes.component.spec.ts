import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneosAjustesComponent } from './tuneos.ajustes.component';

describe('Tuneos.AjustesComponent', () => {
  let component: TuneosAjustesComponent;
  let fixture: ComponentFixture<TuneosAjustesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuneosAjustesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneosAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
