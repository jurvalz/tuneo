import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.CuponesComponent } from './tuneos.cupones.component';

describe('Tuneos.CuponesComponent', () => {
  let component: Tuneos.CuponesComponent;
  let fixture: ComponentFixture<Tuneos.CuponesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.CuponesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.CuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
