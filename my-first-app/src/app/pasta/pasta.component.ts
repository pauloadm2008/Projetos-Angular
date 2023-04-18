import { Component } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css'],
})
export class PastaComponent {
  number = 0;
  cpf = '';
  cestaDeFruta=["pera","banana","uva"]
  onUpdateValue(event) {
    this.number = event.target.value;
  }
  onUpdateCpf(event) {
    this.cpf = event.target.value;
  }
  simple(){console.log("paulo)")}

  simple2 =()=>{console.log("paulo")}

  mudar(){console.log("identidade")}


}
