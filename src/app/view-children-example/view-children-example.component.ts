import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children-example',
  imports: [],
  templateUrl: './view-children-example.component.html',
  styleUrl: './view-children-example.component.scss'
})
export class ViewChildrenExampleComponent {
  @ViewChild('list') list !: ElementRef<HTMLUListElement>;
  @ViewChildren("pElement") allParagraphs !: QueryList<ElementRef<HTMLParagraphElement>>;

  showCustomAttributeValueHandler(): void {
    this.allParagraphs.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const customValue = element.getAttribute('data-value');

      this.list.nativeElement.innerHTML += `<li>${customValue}</li>`
    });
  }
}
