import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, throwError } from 'rxjs';

import { environment } from './../../../../../../src/environments/environment';

import { Response } from '../@common';
import { LoginRequest, LoginResponse } from './models/login.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: LoginRequest) {
    return this.http.post<Response<LoginResponse>>(`${environment.baseUrl}/Auth/Login`, payload).pipe(catchError(e => {
      if (!(e instanceof Error)) {
        return throwError(() => new Error(e.error.message));
      }

      throw e;
    }));
  }
}
