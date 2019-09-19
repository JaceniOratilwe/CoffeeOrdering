import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeTotPage } from './caffe-tot.page';

describe('CaffeTotPage', () => {
  let component: CaffeTotPage;
  let fixture: ComponentFixture<CaffeTotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaffeTotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaffeTotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
