import { Routes } from '@angular/router';
import { OneBindingPageComponent } from './one-binding-page/one-binding-page.component';
import { TwoBindingPageComponent } from './two-binding-page/two-binding-page.component';
import { ControlFlowPageComponent } from './control-flow-page/control-flow-page.component';

export const routes: Routes = [
  {
    path: "one-binding",
    component: OneBindingPageComponent,
  },
  {
    path: "two-binding",
    component: TwoBindingPageComponent,
  },
  {
    path: "control-flow",
    component: ControlFlowPageComponent,
  },
];
