import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalsPage } from './metals.page';

describe('MetalsPage', () => {
  let component: MetalsPage;
  let fixture: ComponentFixture<MetalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetalsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
