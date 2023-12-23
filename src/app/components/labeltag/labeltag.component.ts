import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labeltag',
  standalone: true,
  imports: [],
  templateUrl: './labeltag.component.html',
  styleUrl: './labeltag.component.scss',
})
export class LabeltagComponent {
  @Input() labelText: string = 'LABEL';
}
