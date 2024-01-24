import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyStatCardComponent } from './case-study-stat-card.component';

describe('CaseStudyStatCardComponent', () => {
  let component: CaseStudyStatCardComponent;
  let fixture: ComponentFixture<CaseStudyStatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyStatCardComponent]
    });
    fixture = TestBed.createComponent(CaseStudyStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
