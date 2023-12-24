import { Component } from '@angular/core';
import { LabeltagComponent } from '../../../../components/labeltag/labeltag.component';

@Component({
  selector: 'app-ourcustomers',
  standalone: true,
  templateUrl: './ourcustomers.component.html',
  styleUrl: './ourcustomers.component.scss',
  imports: [LabeltagComponent],
})
export class OurcustomersComponent {}
