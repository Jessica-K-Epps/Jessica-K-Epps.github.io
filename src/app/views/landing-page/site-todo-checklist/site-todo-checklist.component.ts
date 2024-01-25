import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-site-todo-checklist',
  templateUrl: './site-todo-checklist.component.html',
  styleUrls: ['./site-todo-checklist.component.scss'],
})
export class SiteTodoChecklistComponent implements OnInit {
  isChecklistVisible = false;

  toDoForm: FormGroup = this.fb.group({
    checklist: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addChecklistItems([
      { label: "(Jess) Get Headshot for 'About Me' section", checked: false },
      {
        label:
          "(Jess) Add 'Story' text to each Case Study (see figma questions for guidance on what to include)",
        checked: false,
      },
      { label: '(Jess) Come up with TSO Case Study content', checked: false },
      {
        label:
          '(Jess) Review Case Studies & assess asthetics + recommend changes',
        checked: false,
      },
      {
        label:
          "(James/Jess) Handle dual 'Juilliard' case study selection problem",
        checked: false,
      },
      {
        label:
          "(Jess/James) Update 'SGU & Juillard card background images to be as bright as TSO's",
        checked: false,
      },
      {
        label:
          '(James) Make Case Study *numerical* stats pink (using span + class)',
        checked: false,
      },
      {
        label:
          '(James) Update word cloud to show all words, space them out, and apply random colors + apply cream on select + add buttons + add logic',
        checked: false,
      },
      {
        label:
          '(James) Assess + provide alternatives for Case Study cards (box shaddow, basic accordian etc may be too simple/un-modern',
        checked: false,
      },
      { label: '_', checked: false },
    ]);
  }

  get checklistFormArray(): FormArray {
    return this.toDoForm.get('checklist') as FormArray;
  }

  private addChecklistItems(tasks: any[]) {
    tasks.forEach((task) => {
      const control = this.fb.group({
        label: [task.label],
        checked: [task.checked],
      });
      this.checklistFormArray.push(control);
    });
  }

  toggleChecklist() {
    this.isChecklistVisible = !this.isChecklistVisible;
  }
}
