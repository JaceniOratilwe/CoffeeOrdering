import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CappucinoPage } from './cappucino.page';

describe('CappucinoPage', () => {
  let component: CappucinoPage;
  let fixture: ComponentFixture<CappucinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CappucinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CappucinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
