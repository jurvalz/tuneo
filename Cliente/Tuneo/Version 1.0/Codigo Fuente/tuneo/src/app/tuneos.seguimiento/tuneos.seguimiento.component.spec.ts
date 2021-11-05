import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.SeguimientoComponent } from './tuneos.seguimiento.component';

describe('Tuneos.SeguimientoComponent', () => {
  let component: Tuneos.SeguimientoComponent;
  let fixture: ComponentFixture<Tuneos.SeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.SeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.SeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
