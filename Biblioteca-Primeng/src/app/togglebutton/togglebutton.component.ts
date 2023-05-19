import { Component } from '@angular/core';

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.scss']
})
export class TogglebuttonComponent {
  checked: boolean = false;
}
