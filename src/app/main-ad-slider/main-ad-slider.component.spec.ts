import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdSliderComponent } from './main-ad-slider.component';

describe('MainAdSliderComponent', () => {
  let component: MainAdSliderComponent;
  let fixture: ComponentFixture<MainAdSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
