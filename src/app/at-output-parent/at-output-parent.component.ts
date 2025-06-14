import { Component } from '@angular/core';
import { AtOutputChildComponent } from "../at-output-child/at-output-child.component";
import { IProduct } from '../../shared/interfaces/product';

@Component({
  selector: 'app-at-output-parent',
  imports: [AtOutputChildComponent],
  templateUrl: './at-output-parent.component.html',
  styleUrl: './at-output-parent.component.scss'
})
export class AtOutputParentComponent {
  allProducts: IProduct[] = [];
}
