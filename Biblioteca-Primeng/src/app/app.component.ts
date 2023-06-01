import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  

  title = 'projeto-tr-1';
  msgs: Message[] = [
    {
      severity: 'success',
      summary: 'GeeksforGeeks',
      detail: 'This is a message',
    },
  ];
  hide() {
    this.msgs = [];
  }
  ngOnInit() {}
}
