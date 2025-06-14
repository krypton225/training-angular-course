import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-at-input-child',
  imports: [],
  templateUrl: './at-input-child.component.html',
  styleUrl: './at-input-child.component.scss'
})
export class AtInputChildComponent implements OnChanges {
  @Input({ required: true, }) receivedPhoneNumber: string = ``;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
