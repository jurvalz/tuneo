import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.Carrito.TresComponent } from './tuneos.carrito.tres.component';

describe('Tuneos.Carrito.TresComponent', () => {
  let component: Tuneos.Carrito.TresComponent;
  let fixture: ComponentFixture<Tuneos.Carrito.TresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.Carrito.TresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.Carrito.TresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
