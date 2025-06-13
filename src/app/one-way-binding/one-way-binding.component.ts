import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent {
  interpolationExample: string = "Just an example for interpolation";

  propExample: string = `https://i.pinimg.com/736x/ef/b5/cd/efb5cd5b289ef77b44703fd0fab69a71.jpg`;
}
