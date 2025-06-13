import { Component } from '@angular/core';
import { TwoBindingExampleComponent } from "../two-binding-example/two-binding-example.component";

@Component({
  selector: 'app-two-binding-page',
  imports: [TwoBindingExampleComponent],
  templateUrl: './two-binding-page.component.html',
  styleUrl: './two-binding-page.component.scss'
})
export class TwoBindingPageComponent {

}
