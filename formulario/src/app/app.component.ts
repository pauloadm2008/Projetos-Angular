import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'formulario';
  listaDeInputs = [
  {
    label: 'Primeiro nome',
    type: 'text',
    name: 'first name',
    placeholder: 'Digite seu primeiro nome',
    required: true,
  },{
    label: 'Sobrenome',
    type: 'text',
    name: 'last name',
    placeholder: 'Digite seu sobrenome',
    required: true,
  },{
    label: 'E-mail',
    type: 'E-mail',
    name: 'E-mail',
    placeholder: 'Digite seu E-mail',
    required: true,
  },
    {
      label: 'Celular',
      type: 'tel',
      name: 'number',
      placeholder: '(xx) xxxx-xxxx',
      required: true,
    },{
      label: 'Senha',
      type: 'password',
      name: 'password',
      placeholder: 'Digite sua senha',
      required: true,
    },{
      label: 'Confirme sua senha',
      type: 'password',
      name: 'confirme password',
      placeholder: 'Confirme sua senha novamente',
      required: true,
}];
}
