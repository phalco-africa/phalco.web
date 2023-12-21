import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

import { ToastComponent } from './@common/components/toast/toast.component';
import { tokenInterceptor } from './@common/interceptors/token.interceptor';
// import { ErrorInterceptor } from './@common/interceptors/error.interceptor';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),

    provideHttpClient(
      // withInterceptorsFromDi(),
      withInterceptors([
        tokenInterceptor
      ])),
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    provideAnimations(),
    provideToastr({
      toastComponent: ToastComponent
    }),
  ],
};
