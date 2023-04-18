import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() required: boolean;
}
