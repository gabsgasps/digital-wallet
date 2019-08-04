import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedingsPage } from './spedings.page';

describe('SpedingsPage', () => {
  let component: SpedingsPage;
  let fixture: ComponentFixture<SpedingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpedingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpedingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
