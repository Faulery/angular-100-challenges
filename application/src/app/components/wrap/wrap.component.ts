import { AccordionItem } from './../accordion/accordion-item.interface';

import { Component } from '@angular/core';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss'],
})
export class WrapComponent {
  public readonly accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled content 2',
      isExpanded: false,
    },
  ];
  public progressValue: number = 25;
}
