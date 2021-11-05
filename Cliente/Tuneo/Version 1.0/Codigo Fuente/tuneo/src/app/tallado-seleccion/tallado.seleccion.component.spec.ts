import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalladoSeleccionComponent } from './tallado.seleccion.component';

describe('TalladoSeleccionComponent', () => {
  let component: TalladoSeleccionComponent;
  let fixture: ComponentFixture<TalladoSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalladoSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalladoSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
