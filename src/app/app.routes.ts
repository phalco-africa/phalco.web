import { Route } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('@phalco/modules/auth').then((m) => m.AuthComponent),
  },
];
