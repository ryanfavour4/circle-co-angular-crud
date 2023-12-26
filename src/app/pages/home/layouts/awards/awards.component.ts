import { Component } from '@angular/core';
import { LabeltagComponent } from '../../../../components/labeltag/labeltag.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
  imports: [LabeltagComponent],
})
export class AwardsComponent {
  awards = [
    {
      image: '../../../../../assets/icons/award-1.png',
      title: 'Market leader across 18 categories',
      color: 'pink-1',
    },
    {
      image: '../../../../../assets/icons/award-2.png',
      title: 'Most loved SaaS tool in 2021',
      color: 'pink-2',
    },
    {
      image: '../../../../../assets/icons/award-3.png',
      title: 'Category leader in 2022',
      color: 'teal',
    },
    {
      image: '../../../../../assets/icons/award-4.png',
      title: 'Most recommended tool in 2021',
      color: 'pale-lavender',
    },
    {
      image: '../../../../../assets/icons/award-5.png',
      title: 'Champion in survey tool 2022',
      color: 'peach',
    },
    {
      image: '../../../../../assets/icons/award-6.png',
      title: 'Top performer spring 2021',
      color: 'pink-3',
    },
  ];
}
