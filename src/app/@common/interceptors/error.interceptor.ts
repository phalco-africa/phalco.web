import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private get alert(): ToastrService {
    return this.injector.get(ToastrService);
  }

  constructor(@Inject(Injector) private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.alert.error(error.error.message, "Error");

      return throwError(() => new Error(error.error.message));
    }
    if ([400, 401, 402].includes(error.status)) {
      this.alert.error(error.message, 'Error');
      return throwError(() => new Error(error.error.message));
    }

    if (500 === error.status) {
      this.alert.error("It's not you, it's us! Kindly retry later or contact support.");
      return throwError(() => new Error(error.error.message));
    }

    throw error;
  }
}
