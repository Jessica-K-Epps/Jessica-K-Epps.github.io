import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTodoChecklistComponent } from './site-todo-checklist.component';

describe('SiteTodoChecklistComponent', () => {
  let component: SiteTodoChecklistComponent;
  let fixture: ComponentFixture<SiteTodoChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteTodoChecklistComponent]
    });
    fixture = TestBed.createComponent(SiteTodoChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
