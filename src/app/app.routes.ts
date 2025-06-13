import { Routes } from '@angular/router';
import { OneBindingPageComponent } from './one-binding-page/one-binding-page.component';
import { TwoBindingPageComponent } from './two-binding-page/two-binding-page.component';
import { ControlFlowPageComponent } from './control-flow-page/control-flow-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "one-binding",
    pathMatch: "full",
  },
  {
    path: "one-binding",
    component: OneBindingPageComponent,
    title: "One way data binding",
    children: [
      {
        path: "interpolation",
        component: InterpolationComponent,
        title: "One way binding - Interpolation",
      },
      {
        path: "property",
        component: PropertyBindingComponent,
        title: "One way binding - Property",
      },
      {
        path: "event",
        component: EventBindingComponent,
        title: "One way binding - Event",
      },
      {
        path: "class",
        component: ClassBindingComponent,
        title: "One way binding - Class",
      },
      {
        path: "style",
        component: StyleBindingComponent,
        title: "One way binding - Style",
      },
      {
        path: "attribute",
        component: AttributeBindingComponent,
        title: "One way binding - Attribute",
      },
    ],
  },
  {
    path: "two-binding",
    component: TwoBindingPageComponent,
    title: "Two way data binding",
  },
  {
    path: "control-flow",
    component: ControlFlowPageComponent,
    title: "Control flow",
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Not found",
  },
];
