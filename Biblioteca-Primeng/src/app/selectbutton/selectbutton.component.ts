import { Component } from '@angular/core';

@Component({
  selector: 'app-selectbutton',
  templateUrl: './selectbutton.component.html',
  styleUrls: ['./selectbutton.component.scss']
})
export class SelectbuttonComponent {
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

  value: string = 'off';
}
