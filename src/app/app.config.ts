import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

import { errorInterceptor } from './@common/interceptors/error.interceptor';

import { appRoutes } from './app.routes';

import { ToastComponent } from './@common/components/toast/toast.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([
      errorInterceptor
    ])),
    provideAnimations(),
    provideToastr({
      toastComponent: ToastComponent
    }),
  ],
};
