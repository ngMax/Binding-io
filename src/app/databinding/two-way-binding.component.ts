import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input #name type="text" [(ngModel)]="person.name">
    {{person.name}}
    <p #inputText >This is the mother paragraph</p>
    <p>{{inputText.textContent}} | {{name.value}}</p>

  `,
  styles: []
})
export class TwoWayBindingComponent {
  person={
    name:'Sunil',
    age:27
  }
}
