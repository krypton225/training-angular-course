import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "one-binding",
    pathMatch: "full",
  },
  {
    path: "one-binding",
    loadComponent: () => import('./one-binding-page/one-binding-page.component').then(m => m.OneBindingPageComponent),
    title: "One way data binding",
    children: [
      {
        path: "",
        redirectTo: "interpolation",
        pathMatch: "full",
      },
      {
        path: "interpolation",
        loadComponent: () => import('./interpolation/interpolation.component').then(m => m.InterpolationComponent),
        title: "One way binding - Interpolation",
      },
      {
        path: "property",
        loadComponent: () => import('./property-binding/property-binding.component').then(m => m.PropertyBindingComponent),
        title: "One way binding - Property",
      },
      {
        path: "event",
        loadComponent: () => import('./event-binding/event-binding.component').then(m => m.EventBindingComponent),
        title: "One way binding - Event",
      },
      {
        path: "class",
        loadComponent: () => import('./class-binding/class-binding.component').then(m => m.ClassBindingComponent),
        title: "One way binding - Class",
      },
      {
        path: "style",
        loadComponent: () => import('./style-binding/style-binding.component').then(m => m.StyleBindingComponent),
        title: "One way binding - Style",
      },
      {
        path: "attribute",
        loadComponent: () => import('./attribute-binding/attribute-binding.component').then(m => m.AttributeBindingComponent),
        title: "One way binding - Attribute",
      },
    ],
  },
  {
    path: "two-binding",
    loadComponent: () => import('./two-binding-page/two-binding-page.component').then(m => m.TwoBindingPageComponent),
    title: "Two way data binding",
  },
  {
    path: "control-flow",
    loadComponent: () => import('./control-flow-page/control-flow-page.component').then(m => m.ControlFlowPageComponent),
    title: "Control flow",
  },
  {
    path: "session-3",
    loadComponent: () => import('./session-3/session-3.component').then(m => m.Session3Component),
    title: "Session 3",
    children: [
      {
        path: "",
        redirectTo: "template-variable-reference",
        pathMatch: "full",
      },
      {
        path: "template-variable-reference",
        loadComponent: () => import('./template-var-ref-page/template-var-ref-page.component').then(m => m.TemplateVarRefPageComponent),
        title: "Session 3 - Template Variable Reference",
      },
      {
        path: "view-child",
        loadComponent: () => import('./view-child-example/view-child-example.component').then(m => m.ViewChildExampleComponent),
        title: "Session 3 - View Child Example",
      },
      {
        path: "view-children",
        loadComponent: () => import('./view-children-example/view-children-example.component').then(m => m.ViewChildrenExampleComponent),
        title: "Session 3 - View Children Example",
      },
      {
        path: "content-projection",
        loadComponent: () => import('./content-projection-container/content-projection-container.component').then(m => m.ContentProjectionContainerComponent),
        title: "Session 3 - Content Projection Example",
      },
      {
        path: "at-input",
        loadComponent: () => import('./at-input/at-input.component').then(m => m.AtInputComponent),
        title: "Session 3 - @Input Example",
      },
      {
        path: "at-output",
        loadComponent: () => import('./at-output/at-output.component').then(m => m.AtOutputComponent),
        title: "Session 3 - @Output Example",
      },
    ],
  },
  {
    path: "**",
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: "Not found",
  },
];
