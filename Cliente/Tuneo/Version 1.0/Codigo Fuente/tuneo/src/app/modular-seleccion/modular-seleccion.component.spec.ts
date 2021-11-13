import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularSeleccionComponent } from './modular-seleccion.component';

describe('ModularSeleccionComponent', () => {
  let component: ModularSeleccionComponent;
  let fixture: ComponentFixture<ModularSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
