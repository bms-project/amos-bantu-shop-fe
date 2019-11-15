import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchContainerComponent } from './main-search-container.component';

describe('MainSearchContainerComponent', () => {
  let component: MainSearchContainerComponent;
  let fixture: ComponentFixture<MainSearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
