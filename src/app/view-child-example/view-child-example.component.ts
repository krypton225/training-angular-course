import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  imports: [],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.scss'
})
export class ViewChildExampleComponent {
  @ViewChild("paragraphElement") paragraphElement !: ElementRef;

  changeText(): void {
    this.paragraphElement.nativeElement.textContent = `The text was changed!`;
  }
}
