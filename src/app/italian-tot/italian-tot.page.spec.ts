import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianTotPage } from './italian-tot.page';

describe('ItalianTotPage', () => {
  let component: ItalianTotPage;
  let fixture: ComponentFixture<ItalianTotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianTotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianTotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
