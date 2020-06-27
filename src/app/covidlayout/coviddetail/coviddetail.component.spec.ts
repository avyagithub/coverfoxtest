import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoviddetailComponent } from './coviddetail.component';

describe('CoviddetailComponent', () => {
  let component: CoviddetailComponent;
  let fixture: ComponentFixture<CoviddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoviddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoviddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
