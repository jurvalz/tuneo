import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.MensajesComponent } from './tuneos.mensajes.component';

describe('Tuneos.MensajesComponent', () => {
  let component: Tuneos.MensajesComponent;
  let fixture: ComponentFixture<Tuneos.MensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.MensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
