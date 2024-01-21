import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyJuilliardComponent } from './case-study-juilliard.component';

describe('CaseStudyJuilliardComponent', () => {
  let component: CaseStudyJuilliardComponent;
  let fixture: ComponentFixture<CaseStudyJuilliardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyJuilliardComponent]
    });
    fixture = TestBed.createComponent(CaseStudyJuilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
