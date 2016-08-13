import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `
})
export class PropertyBindingComponent {
  @Input() result:number=0;

}
