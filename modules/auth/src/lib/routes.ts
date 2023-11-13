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
          import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'password/forgot',
        loadComponent: () =>
          import('./password/forgot/forgot.component').then(
            (m) => m.ForgotComponent
          ),
      },
      {
        path: 'password/reset',
        loadComponent: () =>
          import('./password/reset/reset.component').then(
            (m) => m.ResetComponent
          ),
      },
      {
        path: 'verify/phone',
        loadComponent: () =>
          import('./verify/phone/phone.component').then(
            (m) => m.PhoneComponent
          ),
      },
      {
        path: 'verify/email',
        loadComponent: () =>
          import('./verify/email/email.component').then(
            (m) => m.EmailComponent
          ),
      },
    ],
  },
] as Route[];
