import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import skillsData from './skills.json';
import * as d3 from 'd3';
// import cloud from 'd3-cloud';
// @ts-ignore
import * as cloud from 'd3-cloud';

declare var anychart: any;

interface Skill {
  name: string;
  category: string;
  highlighted: boolean;
}

const categoryColors = {
  'Social Media': '#666666',
  'Marketing': '#999999',
  'Design Tools': '#CCCCCC',
  'Email Marketing': '#A8A8A8',
  'Analytics Tools': '#BBBBBB',
  'Social Media Management Tools': '#DADADA',
  'Social Media Platforms': '#E5E5E5',
  'Task / Project Management Systems': '#F2F2F2',
};

@Component({
  selector: 'app-skills-and-tools',
  templateUrl: './skills-and-tools.component.html',
  styleUrls: ['./skills-and-tools.component.scss'],
})
export class SkillsAndToolsComponent implements OnInit {
  ngOnInit(): void {
      
  }
}