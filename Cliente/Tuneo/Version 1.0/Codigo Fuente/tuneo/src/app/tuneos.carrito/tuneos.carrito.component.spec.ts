import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.CarritoComponent } from './tuneos.carrito.component';

describe('Tuneos.CarritoComponent', () => {
  let component: Tuneos.CarritoComponent;
  let fixture: ComponentFixture<Tuneos.CarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.CarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
