import { Component } from '@angular/core';

@Component({
  selector: 'app-template-var-ref-page',
  imports: [],
  templateUrl: './template-var-ref-page.component.html',
  styleUrl: './template-var-ref-page.component.scss'
})
export class TemplateVarRefPageComponent {
  descText: string = ``;

  showDescription(description: HTMLParagraphElement) {
    this.descText = String(description.getAttribute("data-description"));
  }
}
