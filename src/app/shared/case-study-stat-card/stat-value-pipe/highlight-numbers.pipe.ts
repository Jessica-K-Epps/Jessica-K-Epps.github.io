import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightNumbers'
})
export class HighlightNumbersPipe implements PipeTransform {
  
  transform(value: string): string {
    // Regular expression to identify numbers
    // const numRegex = /\d+/g;
    const numRegex = /(\d+[\d\.,%]*)/g;
    // Replace numbers with a span element wrapping them
    return value.replace(numRegex, (match) => `<span class="highlight-number">${match}</span>`);
  }

}
