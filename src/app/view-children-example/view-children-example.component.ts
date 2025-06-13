import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children-example',
  imports: [],
  templateUrl: './view-children-example.component.html',
  styleUrl: './view-children-example.component.scss'
})
export class ViewChildrenExampleComponent {
  @ViewChildren("pElement") allParagraphs !: QueryList<ElementRef<HTMLParagraphElement>>;

  showCustomAttributeValueHandler(): void {
    this.allParagraphs.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const customValue = element.getAttribute('data-value');

      console.log(`${customValue}`);
    });
  }
}
