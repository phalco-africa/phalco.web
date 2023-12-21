import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { AuthService } from '@phalco/shared/data-access';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;

  const authReq = req.clone({
    setHeaders: { Authentication: `Bearer: ${token}` }
  });

  return next(authReq);
}