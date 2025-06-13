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
  },
  {
    path: "**",
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
    title: "Not found",
  },
];
