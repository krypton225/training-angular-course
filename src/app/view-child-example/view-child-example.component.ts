import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  imports: [],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.scss'
})
export class ViewChildExampleComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.getTodos();
  }

  @ViewChild("paragraphElement") paragraphElement !: ElementRef;

  changeText(): void {
    this.paragraphElement.nativeElement.textContent = `The text was changed!`;
  }

  async getTodos(): Promise<void> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();

    console.log(data);
  }

  ngOnDestroy(): void {
    console.log("You moved to another routing!");
  }
}
