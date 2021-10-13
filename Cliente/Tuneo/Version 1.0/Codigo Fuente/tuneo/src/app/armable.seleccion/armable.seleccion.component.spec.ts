import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Armable.SeleccionComponent } from './armable.seleccion.component';

describe('Armable.SeleccionComponent', () => {
  let component: Armable.SeleccionComponent;
  let fixture: ComponentFixture<Armable.SeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Armable.SeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Armable.SeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
