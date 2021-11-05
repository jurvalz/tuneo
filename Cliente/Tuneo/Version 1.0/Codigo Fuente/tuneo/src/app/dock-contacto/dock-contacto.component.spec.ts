import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockContactoComponent } from './dock-contacto.component';

describe('DockContactoComponent', () => {
  let component: DockContactoComponent;
  let fixture: ComponentFixture<DockContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
