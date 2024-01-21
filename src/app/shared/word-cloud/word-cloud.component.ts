// import { Component, ElementRef, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
// import * as d3 from 'd3';
// import cloud from 'd3-cloud';

// import jsonData from 'src/app/views/landing-page/skills-and-tools/skills.json';


// interface Word {
//   text: string;
//   size: number;
//   color: string;
//   x?: number;
//   y?: number;
//   rotate?: number;
// }

// @Component({
//   selector: 'app-word-cloud',
//   templateUrl: './word-cloud.component.html',
//   styleUrls: ['./word-cloud.component.scss']
// })
// export class WordCloudComponent implements OnInit, OnDestroy, AfterViewInit {
//   @ViewChild('wordCloudContainer', { static: true }) wordCloudContainer!: ElementRef;

//   words: Word[] = [
//     { text: 'social', size: 60, color: '#1f77b4', rotate: 0 },
//     { text: 'media', size: 50, color: '#ff7f0e', rotate: 0 },
//     // Add all other words with sizes matching your word cloud image
//   ];

//   ngOnInit() {
//     window.addEventListener('resize', this.renderWordCloud.bind(this));
//   }
  
//   ngOnDestroy() {
//     window.removeEventListener('resize', this.renderWordCloud.bind(this));
//   }

//   ngAfterViewInit() {
//     this.renderWordCloud();
//   }

//   renderWordCloud() {
//     const width = this.wordCloudContainer.nativeElement.offsetWidth;
//     const height = this.wordCloudContainer.nativeElement.offsetHeight;

//     const wordLayout = cloud()
//       .size([width, height])
//       .words(this.words as any[]) // Type assertion here
//       .padding(5)
//       .rotate(() => 0)
//       .fontSize((d: any) => d.size) // Type assertion here
//       .on('end', (words: Word[]) => {
//         const svg = d3.select(this.wordCloudContainer.nativeElement)
//           .append('svg')
//             .attr('width', width)
//             .attr('height', height);

//         const group = svg.append('g')
//             .attr('transform', `translate(${width / 2},${height / 2})`);

//         group.selectAll('text')
//           .data(words)
//           .enter()
//           .append('text')
//             .style('font-size', (d: any) => `${d.size}px`) // Type assertion here
//             .style('font-family', 'Impact') 
//             .style('fill', (d: any, i: any) => d3.schemeCategory10[i % 10]) // Type assertion here
//             .attr('text-anchor', 'middle')
//             .attr('transform', (d: any) => `translate(${[d.x, d.y]})rotate(${d.rotate  || 0})`) // Type assertion here
//             .text((d: any) => d.text); // Type assertion here
//       });

//     wordLayout.start();
//   }
// }

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

// Import your JSON data
import jsonData from 'src/app/views/landing-page/skills-and-tools/skills.json';

// Define the Word interface
interface Word {
  text: string;
  size: number;
  color: string;
  x?: number;
  y?: number;
  rotate?: number;
}

// Map your SCSS colors to actual colors
const colorMap = {
  '$jke-primary-color': '#d59ba7',
  '$jke-secondary-color': '#fffaf0',
  '$jke-tertiary-color': '#5c5c5c',
  '$jke-quad-color': '#1f1f1f'
};

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements AfterViewInit {
  @ViewChild('wordCloudContainer', { static: true }) wordCloudContainer!: ElementRef;
  words: Word[] = [];

  constructor() {
    // Prepare the words array from jsonData
    this.words = jsonData.map(item => {
      // Determine the color based on the category, using a switch or if-else structure
      let color = colorMap['$jke-primary-color']; // Default color
      if (item.category === 'Marketing') {
        color = colorMap['$jke-secondary-color'];
      } else if (item.category === 'Design Tools') {
        color = colorMap['$jke-tertiary-color'];
      } else if (item.category === 'Email Marketing') {
        color = colorMap['$jke-quad-color'];
      }
      // Add more conditions for other categories as needed

      return {
        text: item.name,
        size: this.calculateSize(item), // You need to define how to calculate the size
        color: color,
        rotate: 0 // Set this to the desired rotation if needed
      };
    });
  }

  ngAfterViewInit() {
    // Render the word cloud after the view initializes
    this.renderWordCloud();
    window.addEventListener('resize', this.renderWordCloud.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.renderWordCloud.bind(this));
  }

  private calculateSize(item: any): number {
    // Implement your logic to calculate the size
    // For example, size could be based on the text length, a predefined value, etc.
    return 10 + item.name.length; // Example: size based on the length of the name
  }

  renderWordCloud() {
        const width = this.wordCloudContainer.nativeElement.offsetWidth;
        const height = this.wordCloudContainer.nativeElement.offsetHeight;
    
        const wordLayout = cloud()
          .size([width, height])
          .words(this.words as any[]) // Type assertion here
          .padding(5)
          .rotate(() => 0)
          .fontSize((d: any) => d.size) // Type assertion here
          .on('end', (words: Word[]) => {
            const svg = d3.select(this.wordCloudContainer.nativeElement)
              .append('svg')
                .attr('width', width)
                .attr('height', height);
    
            const group = svg.append('g')
                .attr('transform', `translate(${width / 2},${height / 2})`);
    
            group.selectAll('text')
              .data(words)
              .enter()
              .append('text')
                .style('font-size', (d: any) => `${d.size}px`) // Type assertion here
                .style('font-family', '"Verlag Light", sans-serif') 
                .style('fill', (d: any) => d.color)
                .attr('text-anchor', 'middle')
                .attr('transform', (d: any) => `translate(${[d.x, d.y]})rotate(${d.rotate  || 0})`) // Type assertion here
                .text((d: any) => d.text); // Type assertion here
          });
    
        wordLayout.start();
  }
}

// Image's word list
// social, task, adobe, community, management, media, strategy, content, suite, project, engagement, google, pinterest, twitter, analytics, linkedin, asana, copywriting, branding, compassion, loyalty, sprout, marketing, facebook, instagram, tiktok, youtube, microsoft, photoshop, illustrator, design, editing, services, best, creativity, manager, growth, tools, analysis, leadership, respectful, honestly, customer, trends, ads, office, communication, canvas, buffer, hootsuite, indesign, practices, meta, platforms, creation, teamwork, data.

// Current json
// Social Media Best Practices, Social Media Management, Content Creation, Content Strategy, Social Media Analytics, Social Media Optimization, Social Listening, Reputation Management, Marketing Campaign Management, Copywriting and Editing, Branding, Graphic Design, Digital Marketing, Communications, Adobe (Illustrator, InDesign, Photoshop), Canva, Constant Contact Email Marketing, Meta Ads Manager, Google (AdWords, Analytics, Suite), Buffer, Hootsuite, Sprout Social, Facebook, Instagram, LinkedIn, Pinterest, YouTube, TikTok, Twitter/X, Asana, Wrike, task, tiktok, platforms, manager, canvas.

// Combined
// Social Media Best Practices, Social Media Management, Content Creation, Content Strategy, Social Media Analytics, Social Media Optimization, Social Listening, Reputation Management, Marketing Campaign Management, Copywriting and Editing, Branding, Graphic Design, Digital Marketing, Communications, Adobe (Illustrator, InDesign, Photoshop), Canva, Constant Contact Email Marketing, Meta Ads Manager, Google (AdWords, Analytics, Suite), Buffer, Hootsuite, Sprout Social, Facebook, Instagram, LinkedIn, Pinterest, YouTube, TikTok, Twitter/X, Asana, Wrike, task, tiktok, platforms, manager, canvas, social, adobe, community, management, media, strategy, content, suite, project, engagement, google, pinterest, twitter, analytics, linkedin, asana, copywriting, branding, compassion, loyalty, sprout, marketing, facebook, instagram, tiktok, youtube, microsoft, photoshop, illustrator, design, editing, services, best, creativity, manager, growth, tools, analysis, leadership, respectful, honestly, customer, trends, ads, office, communication, canvas, buffer, hootsuite, indesign, practices, meta, platforms, creation, teamwork, data.

// Missing
// social, adobe, community, management, media, strategy, content, suite, project, engagement, analytics, compassion, loyalty, microsoft, design, services, best, creativity, growth, tools, analysis, leadership, respectful, honestly, customer, trends, ads, office, communication, teamwork, data.