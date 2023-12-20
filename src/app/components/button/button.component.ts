import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = 'Click Me';
  @Input() buttonType?: 'primary' | 'secondary' = 'primary';
  @Input() buttonIcon?: string;
  @Output() buttonClick = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    console.log(this.buttonIcon);
    this.buttonClick.emit();
  }
}
