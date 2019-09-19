import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaPrintPage } from './mocha-print.page';

describe('MochaPrintPage', () => {
  let component: MochaPrintPage;
  let fixture: ComponentFixture<MochaPrintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochaPrintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochaPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
