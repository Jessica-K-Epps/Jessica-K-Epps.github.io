import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyTallahasseeSymphonyComponent } from './case-study-tallahassee-symphony.component';

describe('CaseStudyTallahasseeSymphonyComponent', () => {
  let component: CaseStudyTallahasseeSymphonyComponent;
  let fixture: ComponentFixture<CaseStudyTallahasseeSymphonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyTallahasseeSymphonyComponent]
    });
    fixture = TestBed.createComponent(CaseStudyTallahasseeSymphonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
