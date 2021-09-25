import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqComponent } from './arq.component';

describe('ArqComponent', () => {
  let component: ArqComponent;
  let fixture: ComponentFixture<ArqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
