import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneWayBindingComponent } from "./one-way-binding/one-way-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    ControlFlowComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-angular-course';
}
