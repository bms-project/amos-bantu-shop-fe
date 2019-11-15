import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationAccordionComponent } from './main-navigation-accordion.component';

describe('MainNavigationAccordionComponent', () => {
  let component: MainNavigationAccordionComponent;
  let fixture: ComponentFixture<MainNavigationAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavigationAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
