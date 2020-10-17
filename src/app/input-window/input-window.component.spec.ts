import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWindowComponent } from './input-window.component';

describe('InputWindowComponent', () => {
  let component: InputWindowComponent;
  let fixture: ComponentFixture<InputWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
