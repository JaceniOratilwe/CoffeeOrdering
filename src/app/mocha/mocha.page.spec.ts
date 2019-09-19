import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaPage } from './mocha.page';

describe('MochaPage', () => {
  let component: MochaPage;
  let fixture: ComponentFixture<MochaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
