import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneWayBindingComponent } from "./one-way-binding/one-way-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OneWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training-angular-course';
}
