import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpHandlerFn
} from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const alert = inject(ToastrService);

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent || [400, 401, 402, 404].includes(error.status)) {
      alert.error(error.error.message, 'Error');
    }

    if (500 === error.status) {
      alert.error("It's not you, it's us! Kindly retry later or contact support.", 'Error');
    }

    if (error.error instanceof ErrorEvent || [400, 401, 402, 404, 500].includes(error.status)) {
      return throwError(() => new Error(error.error.message));
    }

    throw error;
  }));

}
