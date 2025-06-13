import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.scss'
})
export class ClassBindingComponent {
  hasBgBlue: boolean = true;
  hasPaddingBlock: boolean = true;
  hasPaddingInline: boolean = false;
}
