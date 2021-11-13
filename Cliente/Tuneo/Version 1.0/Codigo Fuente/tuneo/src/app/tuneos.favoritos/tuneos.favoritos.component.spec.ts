import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuneos.FavoritosComponent } from './tuneos.favoritos.component';

describe('Tuneos.FavoritosComponent', () => {
  let component: Tuneos.FavoritosComponent;
  let fixture: ComponentFixture<Tuneos.FavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tuneos.FavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tuneos.FavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
