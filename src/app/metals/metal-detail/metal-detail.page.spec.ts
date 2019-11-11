import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalDetailPage } from './metal-detail.page';

describe('MetalDetailPage', () => {
  let component: MetalDetailPage;
  let fixture: ComponentFixture<MetalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
