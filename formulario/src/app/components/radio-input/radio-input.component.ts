import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})

export class RadioInputComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() class: string;
}
