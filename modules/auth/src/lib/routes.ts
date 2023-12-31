import { Route } from '@angular/router';

import { LayoutComponent } from './@common/layout/layout.component';

export const AUTH_ROUTES = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.page').then(
            (m) => m.RegisterPage
          ),
      },
      {
        path: 'password/forgot',
        loadComponent: () =>
          import('./password/forgot/forgot.page').then(
            (m) => m.ForgotPage
          ),
      },
      {
        path: 'password/reset',
        loadComponent: () =>
          import('./password/reset/reset.page').then(
            (m) => m.ResetPage
          ),
      },
      {
        path: 'verify/phone',
        loadComponent: () =>
          import('./verify/phone/phone.page').then(
            (m) => m.PhonePage
          ),
      },
      {
        path: 'verify/email',
        loadComponent: () =>
          import('./verify/email/email.page').then(
            (m) => m.EmailPage
          ),
      },
    ],
  },
] as Route[];
