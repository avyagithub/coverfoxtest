import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcompComponent } from './errorcomp.component';

describe('ErrorcompComponent', () => {
  let component: ErrorcompComponent;
  let fixture: ComponentFixture<ErrorcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
