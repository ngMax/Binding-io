import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me </button>
    <hr>
    <button (click)="onClickedEvent()">Event Emitter</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked= new EventEmitter<string>();
  onClicked(){
    alert('This is an alert form event binding component');
  }
  onClickedEvent($event){
    this.clicked.emit('Clicked message from event emitter !');
  }
}
