import { Component } from '@angular/core';
import { ContentProjectionExampleComponent } from "../content-projection-example/content-projection-example.component";

@Component({
  selector: 'app-content-projection-container',
  imports: [ContentProjectionExampleComponent],
  templateUrl: './content-projection-container.component.html',
  styleUrl: './content-projection-container.component.scss'
})
export class ContentProjectionContainerComponent {

}
