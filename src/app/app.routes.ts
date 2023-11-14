import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./@common/layouts/main/main.component').then(
        (m) => m.MainComponent
      ),
    loadChildren: () =>
      import('./@common/layouts/main/routes'),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@phalco/auth').then((m) => m.AUTH_ROUTES),
  },
];
