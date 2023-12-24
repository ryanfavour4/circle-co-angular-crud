import { Component } from '@angular/core';
import { LabeltagComponent } from '../../../../components/labeltag/labeltag.component';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-ourpromise',
  standalone: true,
  templateUrl: './ourpromise.component.html',
  styleUrl: './ourpromise.component.scss',
  imports: [LabeltagComponent, ButtonComponent],
})
export class OurpromiseComponent {}
