import { Component } from '@angular/core';

@Component({
  selector: 'app-tristatecheckbox',
  templateUrl: './tristatecheckbox.component.html',
  styleUrls: ['./tristatecheckbox.component.scss']
})
export class TristatecheckboxComponent {
  value: boolean | null = null;
}
