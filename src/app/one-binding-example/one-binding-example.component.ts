import { Component } from '@angular/core';

@Component({
  selector: 'app-one-binding-example',
  imports: [],
  templateUrl: './one-binding-example.component.html',
  styleUrl: './one-binding-example.component.scss'
})
export class OneBindingExampleComponent {
  interpolationExample: string = "Just an example for interpolation";
  hasBgRed: boolean = false;

  hasBgBlue: boolean = true;
  hasPaddingBlock: boolean = true;
  hasPaddingInline: boolean = false;

  isCollapsed: boolean = true;

  propExample: string = `https://i.pinimg.com/736x/ef/b5/cd/efb5cd5b289ef77b44703fd0fab69a71.jpg`;

  buttonHandler(): void {
    this.hasBgRed = !this.hasBgRed;
  }
}
