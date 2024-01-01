// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-word-cloud',
//   templateUrl: './word-cloud.component.html',
//   styleUrls: ['./word-cloud.component.scss']
// })
// export class WordCloudComponent implements OnInit {
//   @ViewChild('wordCloud', { static: true }) private wordCloudElement: ElementRef;

//   // Your words data
//   private words = [
//     { text: 'social', size: 40 },
//     { text: 'community', size: 30 },
//     { text: 'management', size: 50 },
//     // Add more words with their respective sizes
//   ];

//   constructor() {}

//   ngOnInit() {
//     this.generateWordCloud();
//   }

//   generateWordCloud() {
//     const element = this.wordCloudElement.nativeElement;
//     const layout = cloud()
//       .size([800, 400])
//       .words(this.words.map(d => ({text: d.text, size: d.size})))
//       .padding(5)
//       .rotate(() => ~~(Math.random() * 2) * 90)
//       .font('Impact')
//       .fontSize(d => d.size)
//       .on('end', words => {
//         d3.select(element).append('svg')
//             .attr('width', layout.size()[0])
//             .attr('height', layout.size()[1])
//           .append('g')
//             .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
//           .selectAll('text')
//             .data(words)
//           .enter().append('text')
//             .style('font-size', d => d.size)
//             .style('font-family', 'Impact')
//             .attr('text-anchor', 'middle')
//             .attr('transform', d => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
//             .text(d => d.text);
//       });

//     layout.start();
//   }
// }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss'],
})
export class WordCloudComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
