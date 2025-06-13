import { Component } from '@angular/core';
import { OneBindingExampleComponent } from "../one-binding-example/one-binding-example.component";

@Component({
  selector: 'app-one-binding-page',
  imports: [OneBindingExampleComponent, OneBindingExampleComponent],
  templateUrl: './one-binding-page.component.html',
  styleUrl: './one-binding-page.component.scss'
})
export class OneBindingPageComponent {

}
