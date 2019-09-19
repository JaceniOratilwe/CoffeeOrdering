import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeePage } from './caffee.page';

describe('CaffeePage', () => {
  let component: CaffeePage;
  let fixture: ComponentFixture<CaffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaffeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
