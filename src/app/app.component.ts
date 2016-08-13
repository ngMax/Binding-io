import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DatabindingComponent]
})
export class AppComponent {
  title = 'app works!';
}
