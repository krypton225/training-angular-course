import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-one-binding-example',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './one-binding-example.component.html',
  styleUrl: './one-binding-example.component.scss'
})
export class OneBindingExampleComponent {

}
