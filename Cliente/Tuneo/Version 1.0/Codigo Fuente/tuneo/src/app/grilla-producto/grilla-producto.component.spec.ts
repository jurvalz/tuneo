import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaProductoComponent } from './grilla-producto.component';

describe('GrillaProductoComponent', () => {
  let component: GrillaProductoComponent;
  let fixture: ComponentFixture<GrillaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
