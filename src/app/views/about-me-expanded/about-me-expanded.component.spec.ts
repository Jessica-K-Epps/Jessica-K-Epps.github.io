import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeExpandedComponent } from './about-me-expanded.component';

describe('AboutMeExpandedComponent', () => {
  let component: AboutMeExpandedComponent;
  let fixture: ComponentFixture<AboutMeExpandedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeExpandedComponent]
    });
    fixture = TestBed.createComponent(AboutMeExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
