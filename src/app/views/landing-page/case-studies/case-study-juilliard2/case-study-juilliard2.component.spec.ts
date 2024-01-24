import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyJuilliard2Component } from './case-study-juilliard2.component';

describe('CaseStudyJuilliard2Component', () => {
  let component: CaseStudyJuilliard2Component;
  let fixture: ComponentFixture<CaseStudyJuilliard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyJuilliard2Component]
    });
    fixture = TestBed.createComponent(CaseStudyJuilliard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
