import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./../../../nx-welcome.component').then(
                (m) => m.NxWelcomeComponent
            ),
    },
    {
        path: 'home',
        loadChildren: () => import('@phalco/home'),
    },
    {
        path: 'team',
        loadChildren: () => import('@phalco/team'),
    },
    {
        path: 'elections',
        loadChildren: () => import('@phalco/elections'),
    },
] as Route[];
