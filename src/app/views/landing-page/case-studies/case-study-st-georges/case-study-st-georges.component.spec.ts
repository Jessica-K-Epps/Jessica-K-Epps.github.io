import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyStGeorgesComponent } from './case-study-st-georges.component';

describe('CaseStudyStGeorgesComponent', () => {
  let component: CaseStudyStGeorgesComponent;
  let fixture: ComponentFixture<CaseStudyStGeorgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyStGeorgesComponent]
    });
    fixture = TestBed.createComponent(CaseStudyStGeorgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
