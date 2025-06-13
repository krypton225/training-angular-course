import { Component } from '@angular/core';

@Component({
  selector: 'app-template-var-ref',
  imports: [],
  templateUrl: './template-var-ref.component.html',
  styleUrl: './template-var-ref.component.scss'
})
export class TemplateVarRefComponent {
  descText: string = ``;

  showDescription(description: HTMLParagraphElement) {
    this.descText = String(description.getAttribute("data-description"));
  }
}
