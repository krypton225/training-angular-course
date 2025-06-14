import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-projection-example',
  imports: [],
  templateUrl: './content-projection-example.component.html',
  styleUrl: './content-projection-example.component.scss'
})
export class ContentProjectionExampleComponent {
  @ContentChild("spanEl") spanEl !: ElementRef<HTMLSpanElement>;

  showTextOfSpanHandler(): void {
    console.log(this.spanEl.nativeElement.textContent);
  }
}
