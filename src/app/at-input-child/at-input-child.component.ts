import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-at-input-child',
  imports: [],
  templateUrl: './at-input-child.component.html',
  styleUrl: './at-input-child.component.scss'
})
export class AtInputChildComponent {
  @Input({ required: true, }) receivedPhoneNumber: string = ``;
}
