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
    loadChildren: () =>
      import('@phalco/auth').then((m) => m.AUTH_ROUTES),
  },
];
