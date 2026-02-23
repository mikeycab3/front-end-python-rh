import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
   @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
   @Input() type: 'button' | 'submit' = 'button';
   @Input() size: 'sm' | 'md' | 'lg' = 'md';
   @Input() customClass = '';
   @Input() disabled = false;
   @Output() buttonClick = new EventEmitter<Event>();

   get computedClass():string {
      return `btn btn-${this.variant} btn-${this.size} btn-${this.computedClass}`
   }

   onClick(event: Event){
    if(!this.disabled){
      this.buttonClick.emit(event)
    }
   }

}
