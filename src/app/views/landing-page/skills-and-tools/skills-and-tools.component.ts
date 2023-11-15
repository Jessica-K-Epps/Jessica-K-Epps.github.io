import { Component } from '@angular/core';

import skillsData from './skills.json';

interface Skill {
  name: string;
  category: string;
  highlighted: boolean;
}

@Component({
  selector: 'app-skills-and-tools',
  templateUrl: './skills-and-tools.component.html',
  styleUrls: ['./skills-and-tools.component.scss'],
})
export class SkillsAndToolsComponent {
  public skills: Skill[] = skillsData;
  public categories: string[];

  constructor() {
    // Extract unique categories
    const uniqueCategories = new Set(
      this.skills.map((skill) => skill.category)
    );
    this.categories = Array.from(uniqueCategories);
  }

  toggleHighlightByCategory(category: string) {
    this.skills.forEach((skill) => {
      if (skill.category === category) {
        skill.highlighted = !skill.highlighted;
      }
    });
  }

  toggleHighlight(skill: Skill) {
    skill.highlighted = !skill.highlighted;
  }

  onClickSelectSkill(selectedSkill: string) {
    console.log('selectedSkill: ', selectedSkill);
  }
}
