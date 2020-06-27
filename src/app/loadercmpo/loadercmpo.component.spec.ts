import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadercmpoComponent } from './loadercmpo.component';

describe('LoadercmpoComponent', () => {
  let component: LoadercmpoComponent;
  let fixture: ComponentFixture<LoadercmpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadercmpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadercmpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
