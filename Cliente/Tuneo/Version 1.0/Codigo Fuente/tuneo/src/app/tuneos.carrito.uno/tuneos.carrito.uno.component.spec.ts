import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.Carrito.UnoComponent } from './tuneos.carrito.uno.component';

describe('Tuneos.Carrito.UnoComponent', () => {
  let component: Tuneos.Carrito.UnoComponent;
  let fixture: ComponentFixture<Tuneos.Carrito.UnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.Carrito.UnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.Carrito.UnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
