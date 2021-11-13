import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.Carrito.DosComponent } from './tuneos.carrito.dos.component';

describe('Tuneos.Carrito.DosComponent', () => {
  let component: Tuneos.Carrito.DosComponent;
  let fixture: ComponentFixture<Tuneos.Carrito.DosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.Carrito.DosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.Carrito.DosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
