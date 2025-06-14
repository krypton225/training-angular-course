import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product';

@Component({
  selector: 'app-at-output-child',
  imports: [],
  templateUrl: './at-output-child.component.html',
  styleUrl: './at-output-child.component.scss'
})
export class AtOutputChildComponent {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Laptop Pro 16',
      price: 1599.99,
      category: 'Electronics',
      inStock: true,
      reviews: 450
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: 120.00,
      category: 'Peripherals',
      inStock: true,
      reviews: 98
    },
    {
      id: 3,
      name: 'Ergonomic Mouse',
      price: 45.50,
      category: 'Peripherals',
      inStock: false,
    },
    {
      id: 4,
      name: 'USB-C Hub',
      price: 35.00,
      category: 'Accessories',
      inStock: true,
    },
    {
      id: 5,
      name: '4K Monitor',
      price: 399.99,
      category: 'Electronics',
      inStock: true,
      reviews: 210
    }
  ];

  @Output() itemEvent = new EventEmitter();

  fireHandler(): void {
    this.itemEvent.emit(this.products);
  }
}
