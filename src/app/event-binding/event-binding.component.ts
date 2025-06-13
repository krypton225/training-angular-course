import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  hasBgGreen: boolean = false;

  buttonHandler(): void {
    this.hasBgGreen = !this.hasBgGreen;
  }
}
