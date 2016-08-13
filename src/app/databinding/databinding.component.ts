import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  template: ` 
          <h1>My new ngAPP</h1>
          <input type="text" [value]="stringVal">
          <p [ngClass]="{redBorder: true}">Angular 2 is awesome!{{stringVal}}</p>
          <p [ngStyle]="{color: 'green'}">Angular 2 is awesome!{{stringVal}}</p>
          <h3>Custom Property Binding</h3>
          <app-property-binding [result]="10"></app-property-binding>
          <hr>
          <h3>Custom Event Binding</h3>
          <app-event-binding (clicked)="onclickedee($event)"></app-event-binding>
          <hr>
          <h3>Two Way Binding</h3>
          <app-two-way-binding></app-two-way-binding>
  `,
  styleUrls: ['databinding.component.css'],
  directives:[PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent]
})
export class DatabindingComponent  {
  stringVal='Here comes the sun!';
  onclickedee(value:string){
    alert(value);
  }
}
