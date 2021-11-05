import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.OpcionesComponent } from './tuneos.opciones.component';

describe('Tuneos.OpcionesComponent', () => {
  let component: Tuneos.OpcionesComponent;
  let fixture: ComponentFixture<Tuneos.OpcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.OpcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.OpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
