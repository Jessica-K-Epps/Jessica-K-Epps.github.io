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
  public skills: Skill[] = skillsData;
  public categories: string[];

  @ViewChild('wordCloud', { static: true })
  private wordCloudElement!: ElementRef;
  private words = [
    { text: 'social', size: 40 },
    { text: 'community', size: 30 },
    { text: 'management', size: 50 },
    // Add more words with their respective sizes
  ];

  constructor() {
    // Extract unique categories
    const uniqueCategories = new Set(
      this.skills.map((skill) => skill.category)
    );
    this.categories = Array.from(uniqueCategories);
  }

  ngOnInit() {
    this.generateWordCloud();
  }

  ngAfterViewInit() {
    this.initializeWordCloud();
  }

  initializeWordCloud() {
    const data = this.skills.map((skill) => ({
      x: skill.name,
      value: 10, // Value can be adjusted or computed based on your logic
      category: skill.category,
    }));

    var chart = anychart.tagCloud(data);

    chart.tooltip().enabled(false);

    // chart.colorScale(
    //   anychart.scales.ordinalColor([
    //     { category: 'Social Media', color: '#666666' },
    //     { category: 'Marketing', color: '#999999' },
    //     { category: 'Design Tools', color: '#CCCCCC' },
    //     { category: 'Email Marketing', color: '#A8A8A8' },
    //     { category: 'Analytics Tools', color: '#BBBBBB' },
    //     { category: 'Social Media Management Tools', color: '#DADADA' },
    //     { category: 'Social Media Platforms', color: '#E5E5E5' },
    //     { category: 'Task / Project Management Systems', color: '#F2F2F2' },
    //   ])
    // );

    // chart.colorScale((item: { category: keyof typeof categoryColors }) => {
    //   console.log(
    //     `Category: ${item.category}, Color: ${categoryColors[item.category]}`
    //   );
    //   return categoryColors[item.category] || '#000000'; // Default color if category not found
    // });

    chart.colorScale([
      '#666666', // for 'Social Media'
      '#999999', // for 'Marketing'
      '#CCCCCC', // for 'Design Tools'
      // ... and so on for each category
    ]);

    chart.angles([0]);
    chart.textSpacing(5);

    // chart.fontColor('#ccc'); // Let the colorScale control the font color
    // chart.fontFamily('Arial');
    // chart.fontWeight('normal');
    // chart.fontSize(12); // Adjust font size as necessary

    // Access the normal state of the tags to set text settings
    chart.normal({
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontSize: 12, // Adjust font size as necessary
      // Note: Do not set fontColor here as it's handled by the colorScale
    });

    // If needed, you can also set hover and select font settings
    chart.hovered({
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontSize: 12,
      // fontColor can be set for hovered state if required
    });
    chart.selected({
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontSize: 12,
      // fontColor can be set for selected state if required
    });

    chart.container('word-cloud-container');
    chart.draw();
  }

  generateWordCloud() {
    const element = this.wordCloudElement.nativeElement;
    const layout = cloud()
      .size([800, 400])
      .words(this.words.map((d) => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .font('Impact')
      .fontSize((d: any) => d.size)
      .on('end', (words: any) => {
        d3.select(element)
          .append('svg')
          .attr('width', layout.size()[0])
          .attr('height', layout.size()[1])
          .append('g')
          .attr(
            'transform',
            'translate(' +
              layout.size()[0] / 2 +
              ',' +
              layout.size()[1] / 2 +
              ')'
          )
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .style('font-size', (d: any) => d.size)
          .style('font-family', 'Impact')
          .attr('text-anchor', 'middle')
          .attr(
            'transform',
            (d: any) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`
          )
          .text((d: any) => d.text);
      });

    layout.start();
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
