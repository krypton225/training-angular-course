import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-binding-example',
  imports: [FormsModule],
  templateUrl: './two-binding-example.component.html',
  styleUrl: './two-binding-example.component.scss'
})
export class TwoBindingExampleComponent {
  contentText: string = ``;
}
