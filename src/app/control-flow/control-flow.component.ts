import { Component } from '@angular/core';
import { ICar } from '../../shared/interfaces/car.interface';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss']
})
export class ControlFlowComponent {
  age: number = 26;

  cars: ICar[] = [
    {
      make: "Toyota",
      model: "Corolla",
      year: 2022,
      color: "red"
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021,
      color: "white"
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2023,
      color: "black"
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2020,
      color: "blue"
    },
    {
      make: "BMW",
      model: "X5",
      year: 2024,
      color: "grey"
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      color: "silver"
    }
  ];
}
