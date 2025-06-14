import { Component } from '@angular/core';
import { AtInputChildComponent } from "../at-input-child/at-input-child.component";

@Component({
  selector: 'app-at-input-parent',
  imports: [AtInputChildComponent],
  templateUrl: './at-input-parent.component.html',
  styleUrl: './at-input-parent.component.scss'
})
export class AtInputParentComponent {
  constructor() {
    console.log("Welcome on AtInputParentComponent");
  }

  phoneNumber: string = `966554541567`;

  changeNumber(): void {
    this.phoneNumber = `022222222652`;
  }
}
