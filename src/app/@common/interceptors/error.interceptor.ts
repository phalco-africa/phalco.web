import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError(err => errorHandler(err)));
};

export const errorHandler = (error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) {
    inject(ToastrService).error(error.error.message, "Error");

    return throwError(() => new Error(error.error.message));
  }
  if ([400, 401, 402].includes(error.status)) {
    inject(ToastrService).error(error.message, 'Error');
    return throwError(() => new Error(error.error.message));
  }

  if (500 === error.status) {
    inject(ToastrService).error("It's not you, it's us! Kindly retry later or contact support.");
    return throwError(() => new Error(error.error.message));
  }

  throw error;
}