import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaTotPage } from './mocha-tot.page';

describe('MochaTotPage', () => {
  let component: MochaTotPage;
  let fixture: ComponentFixture<MochaTotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochaTotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochaTotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
